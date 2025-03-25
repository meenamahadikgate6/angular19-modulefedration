const app = angular.module("app", ["ngRoute"]);
debugger

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $routeProvider
    .when("/xyz", {
      template: "<h1>AngularJS Shell uuuu</h1>",
    })
    .when("abc", {
      template: "<h1>AngularJS Shell bbbbbbbbbbbbbbb</h1>",
      controller: "MainController",
    })
    .otherwise({
      template: "<h1>AngularJS Shell zzzz</h1>",
    });
}]);

// app.controller("MainController", function ($scope) {
//   console.log("📦 Loading Angular Remote Component...");

//   async function loadAngularComponent() {
//     try {
//       // ✅ Dynamically import the Remote Component from Angular MFE
//       const { bootstrapAngularApp } = await import("mfeApp/bootstrap");

//       console.log("✅ Angular MFE Bootstrap Loaded:", bootstrapAngularApp);

//       const container = document.getElementById("angular-mfe-container");
//       if (container) {
//         container.innerHTML = "<app-remote></app-remote>"; // ✅ Render Angular Component

//         // ✅ Explicitly bootstrap the Angular component in the container
//         bootstrapAngularApp("angular-mfe-container");
//       } else {
//         console.error("❌ Container not found for Angular MFE!");
//       }
//     } catch (error) {
//       console.error("❌ Error loading Angular Component:", error);
//     }
//   }

//   loadAngularComponent();
// });

// ✅ Bootstrap AngularJS App
angular.element(document).ready(function () {
  console.log("AngularJS is loaded:", angular.module("app"));
  angular.bootstrap(document, ["app"]);
});
