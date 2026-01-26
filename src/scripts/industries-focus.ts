// src/scripts/industries-focus.ts
export {};

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  link: string;
}
interface AppState {
  data: NewsItem[];
  filteredData: NewsItem[];
  currentPage: number;
  itemsPerPage: number;
  currentCategory: string;
  searchQuery: string;
}

declare global {
  interface Window {
    industryNews: { changePage: (page: number) => void };
  }
}

let state: AppState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 10,
  currentCategory: "all",
  searchQuery: "",
};

function init(): void {
  const dataElement = document.getElementById("news-data");
  if (!dataElement || !dataElement.textContent) return;

  try {
    state.data = JSON.parse(dataElement.textContent) as NewsItem[];
    state.currentCategory = "all";
    state.searchQuery = "";
    state.currentPage = 1;

    const selectFilter = document.getElementById(
      "filter-category-select"
    ) as HTMLSelectElement | null;
    if (
      selectFilter &&
      selectFilter.value !== "Tất cả" &&
      selectFilter.value !== "전체"
    ) {
      state.currentCategory = selectFilter.value;
    }

    setupEventListeners();
    applyFilters();
  } catch (e) {
    console.error("Lỗi khởi tạo:", e);
  }
}

function applyFilters(): void {
  const query = state.searchQuery.toLowerCase().trim();

  state.filteredData = state.data.filter((item) => {
    const isAllCategory =
      state.currentCategory === "all" ||
      state.currentCategory === "Tất cả" ||
      state.currentCategory === "전체";
    const matchCat = isAllCategory || item.category === state.currentCategory;
    const matchSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  state.currentPage = 1;
  render();
}

function render(): void {
  const container = document.getElementById("news-container");
  const totalCount = document.getElementById("total-count");
  const pagination = document.getElementById("pagination-container");

  if (!container || !totalCount || !pagination) return;

  totalCount.textContent = state.filteredData.length.toString();

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const pageItems = state.filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage);

  if (pageItems.length === 0) {
    container.innerHTML = `<div class="text-center py-20 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300"><p class="text-xl font-medium">Không tìm thấy kết quả.</p></div>`;
  } else {
    container.innerHTML = pageItems
      .map(
        (item) => `
      <a href="${item.link}" class="group block bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#f0f4f8] text-[#002a5c] border border-[#dbe4ee]">${item.category}</span>
              <span class="text-xs text-gray-400 font-medium flex items-center gap-1">📅 ${item.date}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#ee5931] transition-colors leading-snug">${item.title}</h3>
          </div>
          <div class="hidden md:block text-gray-300 group-hover:text-[#ee5931] group-hover:translate-x-2 transition-all">➝</div>
        </div>
      </a>
    `
      )
      .join("");
  }

  if (totalPages > 1) {
    let paginationHTML = `<button onclick="window.industryNews.changePage(${
      state.currentPage - 1
    })" class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50" ${
      state.currentPage === 1 ? "disabled" : ""
    }>«</button>`;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= state.currentPage - 1 && i <= state.currentPage + 1)
      ) {
        paginationHTML += `<button onclick="window.industryNews.changePage(${i})" class="w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
          state.currentPage === i
            ? "bg-[#002a5c] text-white shadow-md"
            : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#ee5931]"
        }">${i}</button>`;
      } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
        paginationHTML += `<span class="w-10 h-10 flex items-center justify-center text-gray-400">...</span>`;
      }
    }
    paginationHTML += `<button onclick="window.industryNews.changePage(${
      state.currentPage + 1
    })" class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50" ${
      state.currentPage === totalPages ? "disabled" : ""
    }>»</button>`;
    pagination.innerHTML = paginationHTML;
  } else {
    pagination.innerHTML = "";
  }
}

function setupEventListeners(): void {
  // SỬA LỖI: Lấy phần tử theo ID mới (news-search-input)
  const searchInput = document.getElementById(
    "news-search-input"
  ) as HTMLInputElement | null;
  const searchBtn = document.getElementById(
    "news-btn-search"
  ) as HTMLButtonElement | null;

  const itemsPerPageSelect = document.getElementById(
    "items-per-page"
  ) as HTMLSelectElement | null;
  const selectFilter = document.getElementById(
    "filter-category-select"
  ) as HTMLSelectElement | null;
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e: Event) => {
      state.searchQuery = (e.target as HTMLInputElement).value;
      applyFilters();
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      state.searchQuery = searchInput.value;
      applyFilters();
    });
  }

  if (itemsPerPageSelect) {
    itemsPerPageSelect.addEventListener("change", (e: Event) => {
      state.itemsPerPage = parseInt((e.target as HTMLSelectElement).value);
      state.currentPage = 1;
      render();
    });
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      const htmlBtn = btn as HTMLElement;
      htmlBtn.addEventListener("click", () => {
        filterBtns.forEach((b) => {
          b.classList.remove("bg-[#002a5c]", "text-white", "border-[#002a5c]");
          b.classList.add("bg-white", "text-gray-600", "border-gray-200");
        });
        htmlBtn.classList.remove(
          "bg-white",
          "text-gray-600",
          "border-gray-200"
        );
        htmlBtn.classList.add("bg-[#002a5c]", "text-white", "border-[#002a5c]");

        const cat = htmlBtn.getAttribute("data-cat");
        if (cat) {
          state.currentCategory = cat;
          if (selectFilter) selectFilter.value = state.currentCategory;
          applyFilters();
        }
      });
    });
  }

  if (selectFilter) {
    selectFilter.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.currentCategory = target.value;
      filterBtns.forEach((b) => {
        const htmlBtn = b as HTMLElement;
        const btnCat = htmlBtn.getAttribute("data-cat");
        if (btnCat === state.currentCategory) htmlBtn.click();
        else if (
          ["Tất cả", "전체"].includes(state.currentCategory) &&
          (btnCat === "Tất cả" || btnCat === "전체")
        )
          htmlBtn.click();
      });
      applyFilters();
    });
  }
}

window.industryNews = {
  changePage: (page: number) => {
    state.currentPage = page;
    render();
    const container = document.getElementById("news-container");
    if (container)
      container.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};

document.addEventListener("astro:page-load", init);
document.addEventListener("DOMContentLoaded", init);
