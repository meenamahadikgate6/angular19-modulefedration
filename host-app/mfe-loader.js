app.controller("MFEController", function ($scope) {
    console.log("📦 Loading Angular Remote Component...");
  
    async function loadAngularComponent() {
      try {
        // ✅ Initialize Webpack Module Federation sharing
        await __webpack_init_sharing__("default");
  
        // ✅ Dynamically load Angular 19 bootstrap function
        const container = await window.mfeApp.get("./bootstrap");
        const { bootstrapAngularApp } = await container();
  
        console.log("✅ Angular MFE Bootstrap Loaded:", bootstrapAngularApp);
  
        // ✅ Inject Angular 19 into AngularJS
        const element = document.getElementById("angular-mfe-container");
        if (element) {
          element.innerHTML = "<app-root></app-root>"; // Adjust based on your component selector
          bootstrapAngularApp(); // Bootstraps Angular 19 standalone component
        } else {
          console.error("❌ Container not found for Angular MFE!");
        }
      } catch (error) {
        console.error("❌ Error loading Angular Component:", error);
      }
    }
  
    loadAngularComponent();
  });
  