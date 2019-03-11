

var x;

function locations() {
    x = document.getElementById("ip").value;
    $.getJSON("https://ipapi.co/" + x + "/json/", function (data) {

        var cityIs = data.city;
        var regionIs = data.region;
        var region_codeIs = data.region_code;
        var country_nameIs = data.country_name;
        var postalIs = data.postal;
        var timezoneIs = data.timezone;


        document.getElementById("city").innerHTML = cityIs;
        document.getElementById("region").innerHTML = regionIs;
        document.getElementById("region_code").innerHTML = region_codeIs;
        document.getElementById("country_name").innerHTML = country_nameIs;
        document.getElementById("postal").innerHTML = postalIs;
        document.getElementById("timezone").innerHTML = timezoneIs;

    });
}

