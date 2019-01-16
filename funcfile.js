/*
Tháng	Số ngày trong tháng
Tháng 1	31
Tháng 2	28 hoặc 29
Tháng 3	31
Tháng 4	30
Tháng 5	31
Tháng 6	30
Tháng 7	31
Tháng 8	31
Tháng 9	30
Tháng 10	31
Tháng 11	30
Tháng 12	31

*/
function findDate() {
    var date = parseInt(document.getElementById('idinput').value);
    switch (date) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            var datesofmonth = document.getElementById('idnoidung');
            datesofmonth.innerText = "Month " + date + " have 31 days";
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11: {
            var datesofmonth = document.getElementById('idnoidung');
            datesofmonth.innerText = "Month " + date + " have 30 days";
            break;
        }
        case 2: {
            var datesofmonth = document.getElementById('idnoidung');
            datesofmonth.innerText = "Month " + date + " have 28 or 29 days";
            break;
        }

    }
}