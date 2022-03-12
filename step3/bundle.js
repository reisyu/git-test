'use strict';

var THREE = require('three/build/three.module');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var THREE__namespace = /*#__PURE__*/_interopNamespace(THREE);

window.addEventListener("load", init);

function init() {
  // window の大きさに変更している
  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const threeCanvas = document.getElementById("three-canvas");
  const renderer = new THREE__namespace.WebGLRenderer({ canvas: threeCanvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(size.width, size.height);

  const scene = new THREE__namespace.Scene();

  const camera = new THREE__namespace.PerspectiveCamera(45, size.width / size.height);
  camera.position.set(0, 1000, 1000);
  camera.lookAt(new THREE__namespace.Vector3(0, 0, 0));

  const grid = new THREE__namespace.GridHelper(1000);
  scene.add(grid);

  const axis = new THREE__namespace.AxesHelper(500);
  scene.add(axis);

  const geometry = new THREE__namespace.BoxGeometry(400, 400, 400);
  const material = new THREE__namespace.MeshNormalMaterial();
  const box = new THREE__namespace.Mesh(geometry, material);
  scene.add(box);

  tick();

  function tick() {
    box.rotation.y += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }

  // ウインドウのリサイズを追加
  window.addEventListener("resize", () => {
    (size.width = window.innerWidth), (size.height = window.innerHeight);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
  });
}
