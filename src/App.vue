<template>
  <div class="background">
    <div class="navbar">
      <div class="nav">
        <div id="name_project">Université Mohammed VI Polytechnique</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgb(250, 250, 250);
}

.navbar {
  background: #fafafa;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav {
  width: 80%;
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#name_project {
  font-weight: 700;
  font-size: 1.5rem;
  color: #333;
}

.container {
  width: 400px;
  max-width: 95%;
  text-align: center;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input > label {
  text-align: start;
  font-weight: 600;
  color: #555;
}

.input > input {
  margin-top: 6px;
  height: 38px !important;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 0 10px;
}

/* From uiverse.io */
.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}

.btn-pers:hover {
  background-color: #198754;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}

.btn-pers:active {
  transform: translate(-50%, -1px);
}

.alternative-option {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}

#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>