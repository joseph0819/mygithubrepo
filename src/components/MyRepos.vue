<template>
    <div className="repo-container">
      
        
          <div class="container">
            <h1 className="repo-title">My <span className="first-span"> GitHub  </span>Repositories</h1>
            
          
        </div>
   
      <div class="container">
        <div class="table-container">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
                <th>Login</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="repo in repos" v-bind:key="repo.id">
                <td>{{ repo.id }}</td>
                <td>{{ repo.name }}</td>
                <td>{{ repo.html_url }}</td>
                <td>{{ repo.owner.login }}</td>
                <td>{{ repo.description }}</td>
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "MyRepos",
    data() {
      return {
        repos: null,
      };
    },
    created: function () {
      axios.get("https://api.github.com/users/joseph0819/repos").then((response) => {
        this.repos = response.data;
      });
    },
  };
  </script>
  
  <style>
  body {
    font: 15px/1.8 "Poppins", sans-serif !important;
  }
  .repo-title{
    text-align: center;
    font-size: 50px;
    font-family: cursive;

  }
  .table-container{
    font-size: 20px;
    margin: 0 40px;
  }
  .table td,
  .table th {
    padding: 20px !important;
  }
  
  </style>