<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
      <a class="navbar-brand" href="#">Momntz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#/people">People <span class="sr-only">(current)</span></a>
          </li>
          <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="#">Link</a>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
            <!--<a class="nav-link disabled" href="#">Disabled</a>-->
          <!--</li>-->
          <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>-->
            <!--<div class="dropdown-menu" aria-labelledby="dropdown01">-->
              <!--<a class="dropdown-item" href="#">Action</a>-->
              <!--<a class="dropdown-item" href="#">Another action</a>-->
              <!--<a class="dropdown-item" href="#">Something else here</a>-->
            <!--</div>-->
          <!--</li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
            <!--<li class="nav-item active">-->
              <!--<a class="nav-link" href="#">People <span class="sr-only">(current)</span></a>-->
            <!--</li>-->
            <!--<li class="nav-item">-->
            <!--<a class="nav-link" href="#">Link</a>-->
            <!--</li>-->
            <!--<li class="nav-item">-->
            <!--<a class="nav-link disabled" href="#">Disabled</a>-->
            <!--</li>-->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Chuck Conway</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </nav>
    <div class="container" style="margin-top: 100px;">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
