// Bài 1
let hamKhuVuc = (khuVuc) => {
  switch (khuVuc) {
    case "x":
      return 0;
    case "a":
      return 2;
    case "b":
      return 1;
    case "c":
      return 0.5;
    default:
      return 0;
  }
};

let hamDoiTuong = (doiTuong) => {
  switch (doiTuong) {
    case "0":
      return 0;
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
};
document.getElementById("ketQua").addEventListener("click", function () {
  console.log("bị bấm");
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let selectedKhuVuc = document.getElementById("khuVuc").value;
  let selectedDoiTuong = document.getElementById("doiTuong").value;

  let tinhDiemKhuVuc = hamKhuVuc(selectedKhuVuc);
  let tinhDiemDoiTuong = hamDoiTuong(selectedDoiTuong);

  let tongDiem = 0;
  tongDiem = diemMon1 + diemMon2 + diemMon3 + tinhDiemKhuVuc + tinhDiemDoiTuong;
  let hienThiKetQua1 = document.getElementById("ketQuaBaiTap1");
  if (diemChuan == 0 || diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    hienThiKetQua1.innerHTML = "Bạn đã rớt do có môn 0đ";
    return;
  }

  if (tongDiem >= diemChuan) {
    hienThiKetQua1.innerHTML = `Bạn đã đậu, tổng điểm: ${tongDiem}`;
  } else {
    hienThiKetQua1.innerHTML = `Bạn đã rớt, tổng điểm: ${tongDiem}`;
  }
});

// Bài 2
const const50KwDau = 500;
const const50Den100Kw = 650;
const const100Den200Kw = 850;
const const200Den350Kw = 1100;
const constConLai = 1300;

let hamGiaTienDien = (soKw) => {
  switch (soKw) {
    case const50KwDau:
      return;
    case const50Den100Kw:
      return;
    case const100Den200Kw:
      return;
    case const200Den350Kw:
      return;
    case constConLai:
      return;
    default:
      return 0;
  }
};
document.getElementById("tinhTienDien").onclick = function () {
  console.log("bị bấm");
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;

  //   let tinhSoKw = hamGiaTienDien(soKw);
  let tong = 0;

  if (soKw == 0 || hoTen == "") {
    document.getElementById("ketQuaBaiTap2").innerHTML =
      "Vui lòng nhập đầy đủ cả 2 thông tin trên!";
    return;
  }

  if (soKw <= 50) {
    tong = soKw * const50KwDau;
  } else if (soKw <= 100) {
    tong = 50 * const50KwDau + (soKw - 50) * const50Den100Kw;
  } else if (soKw <= 200) {
    tong =
      50 * const50KwDau +
      50 * const50Den100Kw +
      (soKw - 100) * const100Den200Kw;
  } else if (soKw <= 350) {
    tong =
      50 * const50KwDau +
      50 * const50Den100Kw +
      100 * const100Den200Kw +
      (soKw - 200) * const200Den350Kw;
  } else if (soKw > 350) {
    tong =
      50 * const50KwDau +
      50 * const50Den100Kw +
      100 * const100Den200Kw +
      150 * const200Den350Kw +
      (soKw - 350) * constConLai;
  } else if (soKw == 0) {
    return "Vui lòng nhập số Kw đã tiêu thụ";
  }

  document.getElementById(
    "ketQuaBaiTap2"
  ).innerHTML = `Họ tên: ${hoTen}, tổng tiền điện: ${tong.toLocaleString("vi", {
    currency: "VND",
    style: "currency",
  })}`;
};
// Bài 3
