<template>
    <nav className="nav-container">
      <h1 className="header-logo"><span className="first-span"> JOSEPH's </span>REPOS</h1>
   <ul className="nav-links">
    <router-link to="/"> <span className="links"> Home </span></router-link>
    <router-link to="/myrepos"> <span className="links">repos</span></router-link>
   </ul>
    </nav>
    <router-view />
</template>

<script>


export default {

name: 'App',
  
  
}
</script>

<style>
 
</style>

