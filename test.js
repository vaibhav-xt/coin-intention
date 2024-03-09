(function () {
    custmonDropDwon();
    basicBannerReadBtn();
    filterToggelBtnFunction();
    hideCustomDrpFunction();
    closeIconFunction();
    mainTableFunction();

    // custmonDropDwon Click
    function custmonDropDwon() {
        const custmonDropDwonCLick = document.querySelector(".custmonDropDwon");

        // On click
        custmonDropDwonCLick.addEventlistner("click", function (e) {

            if (e.target.classList.contains("crossString") || e.target.classList.contains("bowiro")) {
                return false;
            }

            if (e.target.tagName == "A") {
                return true;
            }

            e.preventDefault();

            if (e.target.classList.contains("language") || e.target.parentNode.classList.contains("language")) {
                languageFunc();
            }

            if (window.matchMedia('(max-width: 1170px)').matches) {
                document.body.style.overflow = 'hidden';
            }

            if (e.target.classList.contains("searchCoinDrp")) {
                document.getElementById('tokensearch1').focus();
            }

            if (custmonDropDwonCLick.nextElementSibling.classList.contains(".customDrp")) {
                custmonDropDwonCLick.nextElementSibling.classList.add("active");
            } else {
                custmonDropDwonCLick.querySelector(".customDrp").classList.add("active");
            }

            e.stopPropagation();
            document.addEventListener("click", outsideClick);
        })
    }


    // Outside click
    function outsideClick(e) {
        var container = document.querySelector(".customDrp");
        if (container !== e.target && !container.contains(e.target) && container.classList.contains("active")) {
            container.classList.remove("active");
        }
    }

    // basic_banner_read_btn
    function basicBannerReadBtn() {
        let basic_banner_read_btn = false;

        const basic_banner_read_btn_DOM = document.querySelector(".basic_banner_read_btn")
        basic_banner_read_btn_DOM.addEventListener("click", function (e) {

            const basic_banner_text = document.querySelector(".basic_banner_text");
            if (!basic_banner_read_btn) {
                basic_banner_read_btn_DOM.innerText = "Read Less";
                basic_banner_text.style.height = "0%";
                basic_banner_text.overflow = "hidden";
                basic_banner_text.transition = "all 0.5s ease-in-out";
                basic_banner_read_btn = true;
            } else {
                basic_banner_read_btn_DOM.innerText = "Read More";
                basic_banner_text.style.height = "100%";
                basic_banner_text.overflow = "hidden";
                basic_banner_text.transition = "all 0.5s ease-in-out";
                basic_banner_read_btn = false;
            }

        })
    }

    // filterToggelBtn
    function filterToggelBtnFunction() {
        const filterToggelBtn = document.querySelector(".filterToggelBtn");
        filterToggelBtn.addEventListener("click", (e) => {
            this.classList.toggle("active");
        })
    }


    // hideCustomDrp
    function hideCustomDrpFunction() {
        const hideCustomDrp = document.querySelector(".hideCustomDrp");
        hideCustomDrp.addEventListener("click", function () {
            this.classList.remove("active");
        })
    }

    // closeIcon
    function closeIconFunction() {
        const closeIcon = document.querySelector(".closeIcon");
        closeIcon.addEventListener("click", function () {
            document.querySelector(".customPopup").classList.remove("active");
            document.querySelector(".commonPopup").classList.remove("active");

            if (!document.querySelector(".headerMain").classList.contains("active")) {
                document.body.style.overflow = 'auto';
            }
        })
    }

    // mainTable
    function mainTableFunction() {
        const mainTable = document.querySelector(".mainTable");

        mainTable.addEventListener("scroll", function () {
            let isScroll = e.currentTarget.scrollLeft;
            if (isScroll) {
                document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").classList.add("before");
            } else {
                document.querySelector(".ListingTable th:nth-child(3), td:nth-child(3)").classList.remove("before");
            }
        })
    }
})();