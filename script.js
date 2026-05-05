function chonTour(name) {
    document.getElementById("message").innerText =
        "Bạn đã chọn tour " + name;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;

    if (name === "") {
        alert("Vui lòng nhập họ tên");
        return false;
    }
    if (phone === "") {
        alert("Vui lòng nhập SĐT");
        return false;
    }
    if (email === "") {
        alert("Vui lòng nhập email");
        return false;
    }
    if (destination === "") {
        alert("Chọn điểm đến");
        return false;
    }
    if (date === "") {
        alert("Chọn ngày");
        return false;
    }
    if (people <= 0) {
        alert("Số người > 0");
        return false;
    }

    alert("Đặt tour thành công");
    return true;
}