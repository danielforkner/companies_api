/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((module) => {

eval("const fetchRegisterUser = async (data) => {\n  try {\n    const response = await fetch('/api/users/register', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    const result = await response.json();\n    return { response, result };\n  } catch (error) {\n    throw error;\n  }\n};\n\nconst fetchLoginUser = async (data) => {\n  try {\n    const response = await fetch('/api/users/login', {\n      method: 'PUT',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(data),\n    });\n    const result = await response.json();\n    return { response, result };\n  } catch (error) {\n    throw error;\n  }\n};\n\nmodule.exports = {\n  fetchRegisterUser,\n  fetchLoginUser,\n};\n\n\n//# sourceURL=webpack://companies-api/./src/api/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { fetchRegisterUser, fetchLoginUser } = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n\n// ACORDIAN FUNCTIONS\nlet showSectionButtons = document.querySelectorAll(\n  '.showSectionButton, .categoryTitle'\n);\nlet showDetailsButtons = document.querySelectorAll(\n  '.showDetailsButton, .headingTitle'\n);\n\nshowSectionButtons.forEach((button) => {\n  button.addEventListener('click', () => {\n    let section = button.parentElement.nextElementSibling;\n    section.classList.toggle('showSection');\n    if (section.classList.contains('showSection')) {\n      if (button.classList.contains('showSectionButton')) {\n        button.innerText = 'Collapse';\n      } else {\n        button.nextElementSibling.innerText = 'Collapse';\n      }\n      section.style.height = section.scrollHeight + 'px';\n    } else {\n      if (button.classList.contains('showSectionButton')) {\n        button.innerText = 'Expand';\n      } else {\n        button.nextElementSibling.innerText = 'Expand';\n      }\n      section.style.height = 0;\n    }\n  });\n});\n\nshowDetailsButtons.forEach((button) => {\n  button.addEventListener('click', () => {\n    let div = button.parentElement.nextElementSibling;\n    let section = div.parentElement.parentElement;\n    div.classList.toggle('showSection');\n    if (div.classList.contains('showSection')) {\n      div.style.height = div.scrollHeight + 'px';\n      section.style.height = section.scrollHeight + div.scrollHeight + 'px';\n    } else {\n      section.style.height = section.scrollHeight - div.scrollHeight + 'px';\n      div.style.height = 0;\n    }\n  });\n});\n\n// FORM RESPONSES\nconst handleForm = async (event) => {\n  event.preventDefault();\n  let form = event.target;\n  let loadingDiv = event.target.children[2].children[1];\n  let responseContainer = event.target.nextElementSibling;\n  let requestURL = responseContainer.children[1].children[0];\n  let responseBody = responseContainer.children[3].children[0];\n  let responseCode = responseContainer.children[5].children[0];\n  let formData = new FormData(form);\n  let data = {};\n  let responseObj = {};\n  for (let [key, value] of formData.entries()) {\n    data[key] = value;\n  }\n  loadingDiv.style.backgroundImage = \"url('./images/loading.gif')\";\n  switch (form.id) {\n    case 'registerForm':\n      responseObj = await fetchRegisterUser(data);\n      break;\n    case 'loginForm':\n      responseObj = await fetchLoginUser(data);\n      break;\n    default:\n      console.log('default');\n  }\n  const { response, result } = responseObj;\n  requestURL.innerText = response.url;\n  responseCode.innerText = `${response.status} ${response.statusText}`;\n  responseBody.innerText = result.message ? result.message : result.token;\n  loadingDiv.style.backgroundImage = '';\n};\n\nconst forms = document.querySelectorAll('form');\nforms.forEach((form) => {\n  form.addEventListener('submit', handleForm);\n});\n\n// const registerAUser = async (event) => {\n//   event.preventDefault();\n//   let loadingDiv = event.target.children[2].children[1];\n//   let responseContainer = event.target.nextElementSibling;\n//   console.log(loadingDiv);\n//   console.log(responseContainer);\n//   let formData = new FormData(registerForm);\n//   let data = {};\n//   for (let [key, value] of formData.entries()) {\n//     data[key] = value;\n//   }\n//   document.getElementById('loadingRegister').innerText = 'Loading...';\n//   try {\n//     const { response, result } = await fetchRegisterUser(data);\n//     updateRegisterData({ response, result });\n//   } catch (error) {\n//     console.error(error);\n//   }\n//   document.getElementById('loadingRegister').innerText = '';\n// };\n\n// const loginAUser = async (event) => {\n//   event.preventDefault();\n//   let formData = new FormData(loginForm);\n//   let data = {};\n//   for (let [key, value] of formData.entries()) {\n//     data[key] = value;\n//   }\n//   document.getElementById('loadingLogin').innerText = 'Loading...';\n// const { response, result } = await fetchLoginUser(data);\n// updateLoginData({ response, result });\n//   document.getElementById('loadingLogin').innerText = '';\n// };\n\n// const registerForm = document.getElementById('registerForm');\n// const loginForm = document.getElementById('loginForm');\n// registerForm.addEventListener('submit', registerAUser);\n// loginForm.addEventListener('submit', loginAUser);\n\n// const updateRegisterData = ({ response, result }) => {\n//   document.getElementById('registerUserRequestURL').innerText = response.url;\n//   document.getElementById(\n//     'registerUserResponseCode'\n//   ).innerText = `${response.status} ${response.statusText}`;\n//   document.getElementById('registerUserResponseBody').innerText = result.message\n//     ? result.message\n//     : result.token;\n// };\n\n// const updateLoginData = ({\n//   response,\n//   result,\n//   requestURL,\n//   responseBody,\n//   responseCode,\n// }) => {\n// };\n\n\n//# sourceURL=webpack://companies-api/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;