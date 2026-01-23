// src/scripts/industries-focus.ts

// 1. QUAN TRỌNG: Biến file này thành Module để dùng được declare global
export {};

// 2. Định nghĩa kiểu dữ liệu (Interfaces) - Private trong module này
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

// 3. Khai báo mở rộng cho Window (Global Augmentation)
declare global {
  interface Window {
    industryNews: {
      changePage: (page: number) => void;
    };
  }
}

// 4. Khởi tạo State
let state: AppState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 10,
  currentCategory: "Tất cả",
  searchQuery: "",
};

function init(): void {
  const dataElement = document.getElementById("news-data");
  if (!dataElement || !dataElement.textContent) return;

  try {
    state.data = JSON.parse(dataElement.textContent) as NewsItem[];
    state.filteredData = state.data;

    state.currentPage = 1;
    state.currentCategory = "Tất cả";
    state.searchQuery = "";

    setupEventListeners();
    applyFilters();
  } catch (e) {
    console.error("Lỗi khi đọc dữ liệu tin tức:", e);
  }
}

function applyFilters(): void {
  state.filteredData = state.data.filter((item) => {
    const matchCat =
      state.currentCategory === "Tất cả" ||
      item.category === state.currentCategory;
    const query = state.searchQuery.toLowerCase();
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

  // Render Danh sách
  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 text-gray-500">
        <p class="text-xl">Không tìm thấy kết quả phù hợp.</p>
      </div>
    `;
  } else {
    container.innerHTML = pageItems
      .map(
        (item) => `
      <a href="${item.link}" class="group block bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-3">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                ${item.category}
              </span>
              <span class="text-xs text-gray-400 font-medium flex items-center gap-1">
                📅 ${item.date}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">
              ${item.title}
            </h3>
          </div>
          <div class="hidden md:block text-gray-300 group-hover:text-orange-500 group-hover:translate-x-2 transition-all">
            ➝
          </div>
        </div>
      </a>
    `
      )
      .join("");
  }

  // Render Phân trang
  if (totalPages > 1) {
    let paginationHTML = "";

    // Nút Previous
    paginationHTML += `
      <button onclick="window.industryNews.changePage(${
        state.currentPage - 1
      })" 
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ${state.currentPage === 1 ? "disabled" : ""}>
        «
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= state.currentPage - 1 && i <= state.currentPage + 1)
      ) {
        paginationHTML += `
          <button onclick="window.industryNews.changePage(${i})" 
            class="w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors
            ${
              state.currentPage === i
                ? "bg-[#002a5c] text-white shadow-md"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-orange-600"
            }">
            ${i}
          </button>
        `;
      } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
        paginationHTML += `<span class="w-10 h-10 flex items-center justify-center text-gray-400">...</span>`;
      }
    }

    // Nút Next
    paginationHTML += `
      <button onclick="window.industryNews.changePage(${
        state.currentPage + 1
      })" 
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ${state.currentPage === totalPages ? "disabled" : ""}>
        »
      </button>
    `;

    pagination.innerHTML = paginationHTML;
  } else {
    pagination.innerHTML = "";
  }
}

function setupEventListeners(): void {
  // Ép kiểu Element về đúng loại HTML Element
  const searchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement | null;
  const searchBtn = document.getElementById(
    "btn-search"
  ) as HTMLButtonElement | null;
  const itemsPerPageSelect = document.getElementById(
    "items-per-page"
  ) as HTMLSelectElement | null;
  const selectFilter = document.getElementById(
    "filter-category-select"
  ) as HTMLSelectElement | null;
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (searchBtn && searchInput) {
    const handleSearch = () => {
      state.searchQuery = searchInput.value;
      applyFilters();
    };
    searchBtn.addEventListener("click", handleSearch);
    searchInput.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") handleSearch();
    });
  }

  if (itemsPerPageSelect) {
    itemsPerPageSelect.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.itemsPerPage = parseInt(target.value);
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
        if (htmlBtn.getAttribute("data-cat") === state.currentCategory) {
          htmlBtn.click();
        }
      });
      applyFilters(); // Đừng quên gọi applyFilters khi đổi select
    });
  }
}

// Gán vào window (Lúc này TS đã hiểu industryNews nhờ declare global ở trên)
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
