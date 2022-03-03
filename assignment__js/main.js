/**
 * Tính lương nhân viên
 * Đầu vào:
 * lương 1 ngày 100000
 * nhập số ngày làm 
 * Xử lý:
 * tổng tiền lương = số ngày làm * lương
 * đầu ra:
 * In ra màn hình tổng tiền lương nhân viên
 */
document.getElementById("btn__TLNV").onclick = function() {
        console.log(123);
        const LUONG = 100000;
        var soNgayLam = document.getElementById("txtSoNgayLam").value;
        // Xử Lý
        var tongTienLuong = soNgayLam * LUONG;
        // format VND
        var currentformat = new Intl.NumberFormat('vn-VN');
        var tongTienLuongVND = currentformat.format(tongTienLuong);
        // đầu ra
        var ketQua = "<div> Tổng Lương là:" + tongTienLuongVND + "vnd </div>";
        document.getElementById("footer__tinhLuongNV").innerHTML = ketQua;
    }
    /**
     * Tính tổng số thực
     * đầu vào:
     * nhập 5 số thực
     * Xử lý:
     * cộng 5 số thực chia cho 5
     * Đầu ra: 
     * in ra màn hình tổng số thực
     */
document.getElementById("btn__soThuc").onclick = function() {
        var sothuc1 = document.getElementById("soThucThu1").value * 1;
        var sothuc2 = document.getElementById("soThucThu2").value * 1;
        var sothuc3 = document.getElementById("soThucThu3").value * 1;
        var sothuc4 = document.getElementById("soThucThu4").value * 1;
        var sothuc5 = document.getElementById("soThucThu5").value * 1;
        var tong5SoThuc = (sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5) / 5;
        var ketQua = "<div class='alert alert-danger'>Tổng trung bình là:" + tong5SoThuc + "</div>";
        document.getElementById("footer__tongSoThuc").innerHTML = ketQua;
    }
    /**
     * Quy đổi USD thành VND
     * đầu vào:
     * 1 USD bằng 23.500 VND và là hằng số
     * nhập số tiền USD
     * Xử lý:
     * cho tổng số tiền = số USD nhập vào nhân cho hằng số VND
     * Đầu ra:
     * In ra tổng số tiền quy đổi từ USD sang VND
     */
document.getElementById("btn__quyDoiVND").onclick = function() {
    const VND = 23.500;
    var nhaptienUSD = document.getElementById("txt__sotienUSD").value;
    var total = nhaptienUSD * VND;
    // format
    var currentformat = new Intl.NumberFormat('vn-VN');
    var QuyDoiVNDFormat = currentformat.format(total);
    //đầu ra
    var ketQua = "<div>Tiền quy đổi là:" + total + "" + " " + "vnd</div>";
    document.getElementById("footer__tinhVND").innerHTML = ketQua;
};
/** Tính diện tích chu vi
 * Đầu vào:
 * Nhập chiều dài và chiều rộng
 * Tính chu vi và diện tích HCN
 * Xử lý:
 * Chu vi=(dài + rộng)*2
 * diện tích= dài *rộng
 * Đầu ra:
 * Tính và xuất ra diện tích, chu vi của HCN đó*/
document.getElementById("btn__tinhDienTichChuVi").onclick = function() {
        var chieuDai = document.getElementById("txt__chieuDai").value * 1;
        var chieuRong = document.getElementById("txt__chieuRong").value * 1;
        console.log(chieuDai);
        console.log(chieuRong);
        var chuvi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
        var kq = "<div>";
        kq += "Tổng chu vi hình chữ nhật là:" + chuvi + "" + " <br/>";
        kq += "Tổng diện tích hình chữ nhật là:" + dienTich + "";
        kq += "</div>";
        document.getElementById("footer__dienTichChuVi").innerHTML = kq;
    }
    /**
     * Tính tổng 2 ký số
     * Đầu vào:
     * Nhập 1 số có 2 chữ số
     * Tính tổng 2 chữ số
     * Xử lý:
     * lấy số hàng đơn vị cộng với số hàng chục
     * cách lấy số hàng đơn vị: var so__hang__dv=so%10
     * cách lấy số hàng chục: var so__hang__chuc=so/10
     */
document.getElementById("btn__2KySo").onclick = function() {
    var nhap2KySo = document.getElementById("txt__so2ChuSo").value * 1;
    var so__hang__dv = nhap2KySo % 10;
    console.log(so__hang__dv);
    var so__hang__chuc = Math.floor(nhap2KySo / 10);
    console.log(so__hang__chuc);
    var total = so__hang__chuc + so__hang__dv;
    var tong2KySo = "Tổng 2 ký số là:" + total + "";
    document.getElementById("footer__2KySo").innerHTML = tong2KySo;
}