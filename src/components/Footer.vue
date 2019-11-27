<template>
  <div style='width:100%;'>
    <div class='row footer'>
      <div class='col-sm-12 thanks-to'>
        <a href='https://itson.mx' class='logo itson'></a>
        <a href='https://vuejs.org' class='logo vue'></a>
        <a href='https://github.com/BrayanIribe' class='logo github'></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.main,
.footer {
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  font-size: 130%;
}

.integrantes > p {
  margin-bottom: 5px;
  text-align: justify;
}

.info > p {
  text-align: justify;
  width: 100%;
}

.footer > div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.footer > .thanks-to {
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.logo.itson {
  background-image: url('https://lh4.googleusercontent.com/proxy/m50MsQcMGAutoepTTWnoyWigPijXUeJGRwCPdQhmhvGh-YkeWUVU9CEj01fi-J1J5ZbBdNMVNMYSHbTTY93QZVn89Z-byu_Oul1zILJe2OSNkvcZKCsj1SZ2W5F1wIe2wqIsLEHecbWT_XsO24w2Nltr1j7qGUR8di-PJzljYlRShCd8=s0-d');
}

.logo.vue {
  filter: grayscale(1) brightness(1);
  background-image: url('http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png');
}

.logo.github {
  background-image: url('https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png');
}

.logo {
  padding-top: 30px;
  display: block;
  width: 130px;
  height: 130px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: grayscale(1) brightness(3);
  opacity: 0.6;
  transition: 0.2s;
  cursor: pointer;
}

.logo:hover {
  opacity: 1;
}

.logo.vue:hover {
  filter: grayscale(0) brightness(1.2);
}
</style>
