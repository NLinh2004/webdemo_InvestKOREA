// src/scripts/regions.ts
import imageMapResize from "image-map-resizer";

/**
 * Khởi tạo logic cho Interactive Map
 */
function initInteractiveMap() {
  const mapImg = document.getElementById("korea-map-img") as HTMLImageElement;
  const regionLinks = document.querySelectorAll(".region-link");
  const mapAreas = document.querySelectorAll("area");

  // Nếu không tìm thấy map thì dừng
  if (!mapImg) return;

  // Kích hoạt thư viện resize map
  imageMapResize();

  const setMapImage = (id: string) => {
    // Đảm bảo đường dẫn ảnh đúng với cấu trúc thư mục của bạn
    mapImg.src = `/images/regions/map_${id}.png`;
  };

  // 1. Sự kiện Hover vào Link bên trái (Menu List)
  regionLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const id = link.getAttribute("data-id");
      if (id) setMapImage(id);
    });
  });

  // 2. Sự kiện Hover vào vùng trên bản đồ (Map Areas)
  mapAreas.forEach((area) => {
    area.addEventListener("mouseenter", () => {
      const id = area.getAttribute("data-id");
      if (id) setMapImage(id);
    });
  });
}

/**
 * Khởi tạo logic cho KFEZ Tabs (List Trái - Content Phải)
 */
function initKFEZTabs() {
  const tabBtns = document.querySelectorAll(".kfez-tab-btn");
  const contents = document.querySelectorAll(".kfez-content");
  const mobileSelect = document.getElementById(
    "kfez-select"
  ) as HTMLSelectElement;

  if (!tabBtns.length) return;

  const switchTab = (index: number) => {
    // 1. Xử lý nút bấm (Menu bên trái)
    tabBtns.forEach((btn) => {
      const btnIndex = parseInt(btn.getAttribute("data-index") || "0");
      const arrow = btn.querySelector("svg");

      if (btnIndex === index) {
        // Active Style
        btn.className =
          "kfez-tab-btn w-full text-left px-8 py-4 text-[15px] font-medium transition-all duration-200 flex justify-between items-center group bg-orange-600 text-white shadow-md";

        // Xử lý mũi tên: Hiện và màu trắng
        if (arrow) {
          arrow.setAttribute(
            "class",
            "w-4 h-4 transition-transform duration-200 text-white opacity-100 translate-x-0"
          );
        }
      } else {
        // === INACTIVE STATE (Không chọn) ===
        // Chữ xám, hover nền xám nhạt, border trái ẩn
        btn.className =
          "kfez-tab-btn w-full text-left px-8 py-4 text-[15px] font-medium transition-all duration-200 flex justify-between items-center group text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent hover:border-orange-200";

        // Xử lý mũi tên: Ẩn và màu xám
        if (arrow) {
          arrow.setAttribute(
            "class",
            "w-4 h-4 transition-transform duration-200 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          );
        }
      }
    });

    // 2. Xử lý nội dung (Bên phải)
    contents.forEach((content) => {
      const contentIndex = parseInt(content.getAttribute("data-index") || "0");
      if (contentIndex === index) {
        content.classList.remove("opacity-0", "translate-y-4", "-z-10");
        content.classList.add("opacity-100", "translate-y-0", "z-10");
      } else {
        content.classList.add("opacity-0", "translate-y-4", "-z-10");
        content.classList.remove("opacity-100", "translate-y-0", "z-10");
      }
    });

    // 3. Đồng bộ Mobile Select
    if (mobileSelect) mobileSelect.value = index.toString();
  };

  // Gán sự kiện click cho Tabs Desktop
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index") || "0");
      switchTab(index);
    });
  });

  // Gán sự kiện change cho Mobile Select
  if (mobileSelect) {
    mobileSelect.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      const index = parseInt(target.value);
      switchTab(index);
    });
  }
}

/**
 * Hàm khởi chạy chung
 */
export function initRegionsPage() {
  initInteractiveMap();
  initKFEZTabs();
}
