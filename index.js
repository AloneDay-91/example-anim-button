save_btn = document.querySelector(".div-btn");

    save_btn.onclick = function () {
        this.innerHTML = "<button class='btn-title2'>Downloading</button><div class='logo'><div class='loader'></div></div>";
          setTimeout(() => {
            this.innerHTML = "<button class='btn-title2'>Open File</button><div class='logo'><i class='fa-solid fa-check'></i></div>";
          }, 5000);
    }