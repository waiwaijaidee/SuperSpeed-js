/*!
 * SuperSpeed.js v1.0.0
 * Developer: Waiwai Jaidee | waiwai-it
 */

console.log("🚀 SuperSpeed.js v1 loaded");

const SuperSpeed = {
  version: "1.0.0",

  alert(msg = "ทำงานเร็วสุด ๆ!") {
    alert("🚀 SuperSpeed Alert: " + msg);
  },

  log(msg = "ทำงานเร็วสุด ๆ!") {
    console.log("🧠 SuperSpeed Log:", msg);
  },

  loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      console.log("✅ โหลดสคริปต์สำเร็จ:", url);
      if (callback) callback();
    };
    script.onerror = () => console.error("❌ โหลดสคริปต์ล้มเหลว:", url);
    document.head.appendChild(script);
  },

  ping(url, callback) {
    const start = performance.now();
    fetch(url)
      .then(() => {
        const time = performance.now() - start;
        callback?.(time);
      })
      .catch(() => callback?.(-1));
  },

  logo(containerSelector = "body") {
    const logoHTML = `
      <div class="w-full text-center my-4">
        <img src="https://waiwai-it.com/images/waiwaijaideelogo.png" width="150" alt="Waiwai Jaidee Logo" class="inline-block">
      </div>
    `;
    document.querySelector(containerSelector).insertAdjacentHTML("beforeend", logoHTML);
  },

  footer(containerSelector = "body") {
    const footerHTML = `
      <!-- Footer -->
      <footer class="text-center text-xs text-gray-500 p-4">
        พัฒนาโดย <strong>waiwai-it</strong> | <span class="italic">Waiwai Jaidee</span>
      </footer>
    `;
    document.querySelector(containerSelector).insertAdjacentHTML("beforeend", footerHTML);
  }
};
