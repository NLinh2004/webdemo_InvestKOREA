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
    industryNews: {
      changePage: (page: number) => void;
    };
  }
}

// State quản lý dữ liệu
let state: AppState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 10,
  currentCategory: "all", // Dùng giá trị đặc biệt để đánh dấu "Tất cả"
  searchQuery: "",
};

function init(): void {
  const dataElement = document.getElementById("news-data");
  if (!dataElement || !dataElement.textContent) return;

  try {
    state.data = JSON.parse(dataElement.textContent) as NewsItem[];

    // Reset state mỗi khi init lại (quan trọng khi chuyển trang)
    state.currentCategory = "all";
    state.searchQuery = "";
    state.currentPage = 1;

    // Lấy giá trị mặc định của select box nếu có (để đồng bộ Category)
    const selectFilter = document.getElementById(
      "filter-category-select"
    ) as HTMLSelectElement | null;
    if (selectFilter) {
      // Nếu select đang chọn gì đó khác "Tất cả"/"전체", cập nhật state
      const val = selectFilter.value;
      if (val !== "Tất cả" && val !== "전체") {
        state.currentCategory = val;
      }
    }

    setupEventListeners();
    applyFilters(); // Chạy lọc lần đầu
  } catch (e) {
    console.error("Lỗi khởi tạo dữ liệu tin tức:", e);
  }
}

function applyFilters(): void {
  // 1. Chuẩn hóa từ khóa tìm kiếm (bỏ khoảng trắng thừa, chuyển thường)
  const query = state.searchQuery.toLowerCase().trim();

  state.filteredData = state.data.filter((item) => {
    // 2. Logic Lọc Category (Hỗ trợ đa ngôn ngữ)
    // Nếu state là 'all' HOẶC giá trị trong dropdown là 'Tất cả'/'전체' -> Lấy hết
    const isAllCategory =
      state.currentCategory === "all" ||
      state.currentCategory === "Tất cả" ||
      state.currentCategory === "전체";

    const matchCat = isAllCategory || item.category === state.currentCategory;

    // 3. Logic Tìm kiếm (Tìm trong Title hoặc Category)
    const matchSearch =
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return matchCat && matchSearch;
  });

  // Luôn reset về trang 1 khi danh sách kết quả thay đổi
  state.currentPage = 1;
  render();
}

function render(): void {
  const container = document.getElementById("news-container");
  const totalCount = document.getElementById("total-count");
  const pagination = document.getElementById("pagination-container");

  if (!container || !totalCount || !pagination) return;

  // Cập nhật số lượng
  totalCount.textContent = state.filteredData.length.toString();

  // Tính toán phân trang
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const pageItems = state.filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage);

  // --- A. Render Danh sách ---
  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p class="text-xl font-medium">Không tìm thấy kết quả.</p>
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
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#f0f4f8] text-[#002a5c] border border-[#dbe4ee]">
                ${item.category}
              </span>
              <span class="text-xs text-gray-400 font-medium flex items-center gap-1">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                ${item.date}
              </span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#ee5931] transition-colors leading-snug">
              ${item.title}
            </h3>
          </div>
          <div class="hidden md:block text-gray-300 group-hover:text-[#ee5931] group-hover:translate-x-2 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>
      </a>
    `
      )
      .join("");
  }

  // --- B. Render Phân trang ---
  if (totalPages > 1) {
    let paginationHTML = "";

    paginationHTML += `
      <button onclick="window.industryNews.changePage(${
        state.currentPage - 1
      })" 
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ${state.currentPage === 1 ? "disabled" : ""}>«</button>
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
                : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#ee5931]"
            }">
            ${i}
          </button>
        `;
      } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
        paginationHTML += `<span class="w-10 h-10 flex items-center justify-center text-gray-400">...</span>`;
      }
    }

    paginationHTML += `
      <button onclick="window.industryNews.changePage(${
        state.currentPage + 1
      })" 
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ${state.currentPage === totalPages ? "disabled" : ""}>»</button>
    `;

    pagination.innerHTML = paginationHTML;
  } else {
    pagination.innerHTML = "";
  }
}

function setupEventListeners(): void {
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

  // --- 1. SỰ KIỆN TÌM KIẾM (QUAN TRỌNG) ---
  if (searchInput) {
    // Sự kiện 'input': Chạy ngay khi người dùng gõ phím
    searchInput.addEventListener("input", (e: Event) => {
      const target = e.target as HTMLInputElement;
      state.searchQuery = target.value;
      applyFilters();
    });
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      state.searchQuery = searchInput.value;
      applyFilters();
    });
  }

  // --- 2. SỰ KIỆN LỌC SỐ LƯỢNG ---
  if (itemsPerPageSelect) {
    itemsPerPageSelect.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.itemsPerPage = parseInt(target.value);
      state.currentPage = 1;
      render();
    });
  }

  // --- 3. SỰ KIỆN CHỌN TAG (BUTTONS) ---
  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      const htmlBtn = btn as HTMLElement;
      htmlBtn.addEventListener("click", () => {
        // Cập nhật UI
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
          // Đồng bộ Select Box
          if (selectFilter) selectFilter.value = state.currentCategory;
          applyFilters();
        }
      });
    });
  }

  // --- 4. SỰ KIỆN SELECT BOX (MOBILE) ---
  if (selectFilter) {
    selectFilter.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.currentCategory = target.value;

      // Đồng bộ ngược lại Tags
      filterBtns.forEach((b) => {
        const htmlBtn = b as HTMLElement;
        const btnCat = htmlBtn.getAttribute("data-cat");

        if (btnCat === state.currentCategory) {
          htmlBtn.click();
        } else if (["Tất cả", "전체"].includes(state.currentCategory)) {
          // Nếu chọn "Tất cả", kích hoạt nút đầu tiên
          if (btnCat === "Tất cả" || btnCat === "전체") htmlBtn.click();
        }
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
