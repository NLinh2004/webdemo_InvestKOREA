// src/scripts/offices.ts

// Dữ liệu văn phòng (Rút gọn mẫu, bạn có thể copy full từ code gốc nếu cần)
const officeData: Record<string, any[]> = {
  usa: [
    {
      name: "New York",
      link: "http://www.kotra.or.kr/KBC/newyork/KTMIUI010M.html",
    },
    {
      name: "Los Angeles",
      link: "http://www.kotra.or.kr/KBC/losangeles/KTMIUI010M.html",
    },
    {
      name: "Silicon Valley",
      link: "http://www.kotra.or.kr/KBC/siliconvalley/KTMIUI010M.html",
    },
  ],
  vietnam: [
    { name: "Hanoi", link: "https://www.kotra.or.kr/hanoi" },
    { name: "Ho Chi Minh", link: "https://www.kotra.or.kr/hochiminh" },
  ],
  korea: [{ name: "Seoul (Headquarter)", link: "https://www.kotra.or.kr/" }],
};

export function initOfficeFinder() {
  const countrySelect = document.getElementById(
    "office-country"
  ) as HTMLSelectElement;
  const regionSelect = document.getElementById(
    "office-region"
  ) as HTMLSelectElement;
  const goBtn = document.getElementById("office-go-btn") as HTMLAnchorElement;

  if (!countrySelect || !regionSelect) return;

  // Xử lý khi chọn Quốc gia
  countrySelect.addEventListener("change", () => {
    const countryKey = countrySelect.value;
    regionSelect.innerHTML = '<option value="">Select Region</option>'; // Reset

    if (countryKey && officeData[countryKey]) {
      officeData[countryKey].forEach((office: any) => {
        const option = document.createElement("option");
        option.value = office.link;
        option.textContent = office.name;
        regionSelect.appendChild(option);
      });
      regionSelect.disabled = false;
    } else {
      regionSelect.disabled = true;
    }
  });

  // Xử lý khi bấm nút Go
  goBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const link = regionSelect.value;
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("Please select a region first.");
    }
  });
}
