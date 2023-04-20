document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', () => {

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', "https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe");
    downloadLink.setAttribute('download', 'steam-installer.exe');
    console.log('Se ha hecho clic en el botón de descarga');
    downloadLink.click();
});