document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    if (header) {
        header.innerHTML = `
            <div class="header-content">
                <div class="header-image">
                    <img src="images/gg_bridge.jpeg" alt="Golden Gate Bridge" style="height: 138px;">
                </div>
                <div class="header-title">
                    <h1><a href="index.html" style="color: inherit; text-decoration: none;">Nicole Farias</a></h1>
                    <p class="tagline">Science and Engineering</p>
                </div>
                <div class="header-logo">
                    <img src="images/logo.jpeg" alt="Logo" style="height: 138px;">
                </div>
            </div>
        `;
    }
});
