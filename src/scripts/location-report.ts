// src/scripts/location-report.ts
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
    locationReport: {
      changePage: (page: number) => void;
    };
  }
}

let state: ReportState = {
  data: [],
  filteredData: [],
  currentPage: 1,
  itemsPerPage: 9, // Hiển thị 9 item (lưới 3x3)
  currentRegion: "all",
  searchQuery: "",
};

function init(): void {
  const dataElement = document.getElementById("report-data");
  if (!dataElement || !dataElement.textContent) return;

  try {
    state.data = JSON.parse(dataElement.textContent) as ReportItem[];
    state.currentRegion = "all";
    state.searchQuery = "";
    state.currentPage = 1;

    // Check select box default value
    const selectFilter = document.getElementById(
      "region-select"
    ) as HTMLSelectElement | null;
    if (selectFilter) {
      const val = selectFilter.value;
      if (val !== "Tất cả khu vực" && val !== "전체 지역") {
        state.currentRegion = val;
      }
    }

    setupEventListeners();
    applyFilters();
  } catch (e) {
    console.error("Lỗi khởi tạo dữ liệu báo cáo:", e);
  }
}

function applyFilters(): void {
  const query = state.searchQuery.toLowerCase().trim();

  state.filteredData = state.data.filter((item) => {
    // Logic Region
    const isAllRegion =
      state.currentRegion === "all" ||
      state.currentRegion === "Tất cả khu vực" ||
      state.currentRegion === "전체 지역";

    const matchRegion = isAllRegion || item.region === state.currentRegion;

    // Logic Search
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

  // A. RENDER DANH SÁCH (CARD IMAGE STYLE)
  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-20 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p class="text-xl font-medium">Không tìm thấy báo cáo phù hợp.</p>
      </div>
    `;
  } else {
    container.innerHTML = pageItems
      .map(
        (item) => `
      <a href="${
        item.link
      }" class="group block h-full flex flex-col bg-white rounded-lg hover:shadow-lg transition-all duration-300 p-2 border border-transparent hover:border-gray-100"> 
        <div class="relative overflow-hidden rounded-lg mb-5 aspect-[4/3] shadow-sm bg-gray-100"> 
          <img src="${item.image.replace("/public", "")}" alt="${
          item.title
        }" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onerror="this.src='/images/placeholder.jpg'"> 
          
          <div class="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-medium">
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

    paginationHTML += `<button onclick="window.locationReport.changePage(${
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
        paginationHTML += `<button onclick="window.locationReport.changePage(${i})" class="w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
          state.currentPage === i
            ? "bg-[#002a5c] text-white shadow-md"
            : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#ee5931]"
        }">${i}</button>`;
      } else if (i === state.currentPage - 2 || i === state.currentPage + 2) {
        paginationHTML += `<span class="w-10 h-10 flex items-center justify-center text-gray-400">...</span>`;
      }
    }

    paginationHTML += `<button onclick="window.locationReport.changePage(${
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
  // Lấy element theo ID MỚI
  const searchInput = document.getElementById(
    "report-search-input"
  ) as HTMLInputElement | null;
  const searchBtn = document.getElementById(
    "report-btn-search"
  ) as HTMLButtonElement | null;
  const regionSelect = document.getElementById(
    "region-select"
  ) as HTMLSelectElement | null;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Sự kiện tìm kiếm Real-time
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

  // Sự kiện Select Box
  if (regionSelect) {
    regionSelect.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLSelectElement;
      state.currentRegion = target.value;

      // Sync nút bấm
      filterBtns.forEach((b) => {
        const htmlBtn = b as HTMLElement;
        const btnReg = htmlBtn.getAttribute("data-region");

        if (btnReg === state.currentRegion) htmlBtn.click();
        else if (
          ["all", "Tất cả khu vực", "전체 지역"].includes(
            state.currentRegion
          ) &&
          ["Tất cả khu vực", "전체 지역"].includes(btnReg || "")
        ) {
          htmlBtn.click();
        }
      });
      applyFilters();
    });
  }

  // Sự kiện Buttons
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

        const reg = htmlBtn.getAttribute("data-region");
        if (reg) {
          state.currentRegion = reg;
          if (regionSelect) regionSelect.value = state.currentRegion;
          applyFilters();
        }
      });
    });
  }
}

window.locationReport = {
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
