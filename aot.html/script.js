// script.js
function searchClips() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const clipList = document.getElementById('clipList');
    clipList.innerHTML = ''; // Clear previous results

    // Example movie clips data (replace with actual data or API call)
    const movieClips = [
        { title: 'Attack On Titan Scene', url: 'https://drive.usercontent.google.com/u/0/uc?id=1-HNC-yh8FANJhFKrYXWuYQkTSdcC-SVR&export=download' },
        { title: 'Jinwoo vs Goto Scene', url: 'https://drive.usercontent.google.com/u/0/uc?id=11jsKGo04rtTNFQnKd0ZsgctiB3qaf4xR&export=download' },
        { title: 'Sung vs Igris Scene', url: 'https://drive.usercontent.google.com/u/0/uc?id=1AHqkNsfuNWeDtP5Qix1oXxUYcL08Xowb&export=download' },
        { title: 'Sung Nonchal clip Scene', url:'https://drive.usercontent.google.com/u/0/uc?id=14FkHU82HAkowilcKq45XNpT_oi3qt91g&export=download' }, 
        { title: 'Jiraya death clip', url:'https://drive.usercontent.google.com/download?id=173AN6oP6MR8cRRv7J_SUZ7lRB7499IPx&export=download' },
        { title: 'Naruto vs Sasuke Final Fight Scene', url: 'https://drive.usercontent.google.com/download?id=1UKrvu195U5yrxIWY1Ib9mReUIb3xSG-t&export=download' },
        { title: 'sanji vs fishman Scene', url: 'https://drive.usercontent.google.com/u/0/uc?id=1-5v4NjosQSCm-LeR36p667gp0lVARGI7&export=download' },  
        { title: 'Sukuna vs maharoga Fight Scene', url: 'https://drive.usercontent.google.com/download?id=1eQimdBHEDAyrbFLGyRRTG15Ao25pxb5h&export=download' },  

    ]; 

    // Filter and display clips based on search input
    movieClips.forEach(clip => {
        if (clip.title.toLowerCase().includes(searchInput)) {
            const clipItem = document.createElement('div');
            clipItem.className = 'clip-item';
            clipItem.innerHTML = `
                <span>${clip.title}</span>
                <a href="${clip.url}" class="download-link" download>Download</a>
            `;
            clipList.appendChild(clipItem);
        }
    });
}

// Initial load of clips (optional)
window.onload = searchClips;