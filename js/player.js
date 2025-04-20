document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const videos = [
      { id: "HD5Gip-NP4I", title: "Deslavi Vibes" },
      { id: "mo3wUGXWUGg", title: "Midnight Groove" },
      { id: "0aMq2K2JJKE", title: "Street Bounce" },
      { id: "WXN5jOLu72Q", title: "Chill Hop Sunday" }
    ];
  
    videos.forEach(({ id, title }) => {
      const card = document.createElement("div");
      card.classList.add("video-card");
  
      const wrapper = document.createElement("div");
      wrapper.classList.add("video-wrapper");
  
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}`;
      iframe.loading = "lazy";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      wrapper.appendChild(iframe);
  
      const info = document.createElement("div");
      info.classList.add("video-info");
  
      const titleRow = document.createElement("div");
      titleRow.classList.add("title-row");
  
      const icon = document.createElement("span");
      icon.textContent = "🎶";
      icon.classList.add("title-icon");
  
      const titleEl = document.createElement("span");
      titleEl.classList.add("song-title");
      titleEl.textContent = title;
  
      titleRow.appendChild(icon);
      titleRow.appendChild(titleEl);
  
      const actions = document.createElement("div");
      actions.classList.add("card-actions");
  
      // LIKE button
      const likeBtn = document.createElement("button");
      likeBtn.classList.add("action-btn", "like-btn");
      likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i><span class="like-count"> 0</span>`;
  
      likeBtn.addEventListener("click", () => {
        const icon = likeBtn.querySelector("i");
        const countSpan = likeBtn.querySelector(".like-count");
  
        if (icon.classList.contains("fa-regular")) {
          icon.classList.replace("fa-regular", "fa-solid");
          icon.classList.add("liked");
          countSpan.textContent = ` ${parseInt(countSpan.textContent) + 1}`;
        } else {
          icon.classList.replace("fa-solid", "fa-regular");
          icon.classList.remove("liked");
          countSpan.textContent = ` ${parseInt(countSpan.textContent) - 1}`;
        }
      });
  
      // SHARE button
      const shareBtn = document.createElement("button");
      shareBtn.classList.add("action-btn", "share-btn");
      shareBtn.innerHTML = `<i class="fa-regular fa-paper-plane"></i>`;
  
      shareBtn.addEventListener("click", () => {
        const icon = shareBtn.querySelector("i");
        const videoURL = `https://www.youtube.com/watch?v=${id}`;
  
        // Change icon
        if (icon.classList.contains("fa-regular")) {
          icon.classList.replace("fa-regular", "fa-solid");
          icon.classList.add("shared");
        }
  
        // Get popup elements
        const popup = document.getElementById("share-popup");
        const shareLink = document.getElementById("share-link");
        const copyBtn = document.getElementById("copy-btn");
        const closeBtn = document.getElementById("close-popup");
  
        if (!popup || !shareLink || !copyBtn || !closeBtn) return;
  
        shareLink.value = videoURL;
        popup.classList.remove("hidden");
        popup.classList.add("show");
  
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(shareLink.value);
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy Link"), 1500);
        };
  
        closeBtn.onclick = () => {
          popup.classList.remove("show");
          popup.classList.add("hidden");
        };
      });
  
      actions.appendChild(likeBtn);
      actions.appendChild(shareBtn);
  
      info.appendChild(titleRow);
      info.appendChild(actions);
  
      card.appendChild(wrapper);
      card.appendChild(info);
      container.appendChild(card);
    });
  });
  