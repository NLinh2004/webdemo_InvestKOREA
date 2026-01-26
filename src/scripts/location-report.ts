// src/scripts/invest-report.ts
export {};

interface ReportItem {
  id: number;
  title: string;
  region: string;
  image: string;
  date: string;
  link: string;
}

interface ReportState {
  data: ReportItem[];
  filteredData: ReportItem[];
  currentPage: number;
  itemsPerPage: number;
  currentRegion: string;
  searchQuery: string;
}

declare global {
  interface Window {
    investReport: {
      changePage: (page: number) => void;
    };
  }
}

let state: ReportState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 9, // Để 9 item cho đẹp grid 3x3
  currentRegion: "Tất cả",
  searchQuery: "",
};

function init(): void {
  const dataElement = document.getElementById("report-data");
  if (!dataElement || !dataElement.textContent) return;

  try {
    state.data = JSON.parse(dataElement.textContent) as ReportItem[];
    state.filteredData = state.data;
    setupEventListeners();
    applyFilters();
  } catch (e) {
    console.error("Lỗi parse dữ liệu báo cáo:", e);
  }
}

function applyFilters(): void {
  state.filteredData = state.data.filter((item) => {
    const matchRegion =
      state.currentRegion === "Tất cả" || item.region === state.currentRegion;
    const query = state.searchQuery.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(query) ||
      item.region.toLowerCase().includes(query);
    return matchRegion && matchSearch;
  });

  state.currentPage = 1;
  render();
}

function render(): void {
  const container = document.getElementById("report-container");
  const totalCount = document.getElementById("total-count");
  const pagination = document.getElementById("pagination-container");

  if (!container || !totalCount || !pagination) return;

  totalCount.textContent = state.filteredData.length.toString();

  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  const pageItems = state.filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(state.filteredData.length / state.itemsPerPage);

  // A. RENDER DANH SÁCH (Sử dụng HTML Card bạn yêu cầu)
  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 text-gray-500">
        <p class="text-xl">Không tìm thấy báo cáo phù hợp.</p>
      </div>
    `;
  } else {
    container.innerHTML = pageItems
      .map(
        (item) => `
      <a href="${item.link}" class="group block h-full flex flex-col bg-white rounded-lg hover:shadow-lg transition-all duration-300 p-2 border border-transparent hover:border-gray-100"> 
        <div class="relative overflow-hidden rounded-lg mb-5 aspect-[4/3] shadow-sm bg-gray-100"> 
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onerror="this.src='/images/placeholder.jpg'"> 
          <div class="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            ${item.region}
          </div>
        </div> 
        <div class="flex-1 flex flex-col"> 
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#ee5931] transition-colors mb-4 line-clamp-2 leading-snug not-italic"> 
            ${item.title} 
          </h3> 
          <div class="mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500 flex items-center gap-2"> 
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            ${item.date} 
          </div> 
        </div> 
      </a>
    `
      )
      .join("");
  }

  // B. RENDER PHÂN TRANG
  if (totalPages > 1) {
    let paginationHTML = "";
    // Previous Button
    paginationHTML += `
      <button onclick="window.investReport.changePage(${
        state.currentPage - 1
      })" 
        class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        ${state.currentPage === 1 ? "disabled" : ""}>«</button>
    `;

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= state.currentPage - 1 && i <= state.currentPage + 1)
      ) {
        paginationHTML += `
          <button onclick="window.investReport.changePage(${i})" 
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

    // Next Button
    paginationHTML += `
      <button onclick="window.investReport.changePage(${
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
  const regionSelect = document.getElementById(
    "region-select"
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

  // Xử lý Select box (Mobile)
  if (regionSelect) {
    regionSelect.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.currentRegion = target.value;

      // Sync với buttons
      filterBtns.forEach((b) => {
        const htmlBtn = b as HTMLElement;
        if (htmlBtn.getAttribute("data-region") === state.currentRegion) {
          updateActiveButton(htmlBtn, filterBtns);
        }
      });
      applyFilters();
    });
  }

  // Xử lý Filter Buttons (Desktop)
  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      const htmlBtn = btn as HTMLElement;
      htmlBtn.addEventListener("click", () => {
        updateActiveButton(htmlBtn, filterBtns);
        const region = htmlBtn.getAttribute("data-region");
        if (region) {
          state.currentRegion = region;
          if (regionSelect) regionSelect.value = state.currentRegion;
          applyFilters();
        }
      });
    });
  }
}

function updateActiveButton(activeBtn: HTMLElement, allBtns: NodeList) {
  allBtns.forEach((btn) => {
    const b = btn as HTMLElement;
    b.classList.remove("bg-[#002a5c]", "text-white", "border-[#002a5c]");
    b.classList.add("bg-white", "text-gray-600", "border-gray-200");
  });
  activeBtn.classList.remove("bg-white", "text-gray-600", "border-gray-200");
  activeBtn.classList.add("bg-[#002a5c]", "text-white", "border-[#002a5c]");
}

window.investReport = {
  changePage: (page: number) => {
    state.currentPage = page;
    render();
    const container = document.getElementById("report-container");
    if (container)
      container.scrollIntoView({ behavior: "smooth", block: "start" });
  },
};

document.addEventListener("astro:page-load", init);
document.addEventListener("DOMContentLoaded", init);
