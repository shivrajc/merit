<script>
  import Header from "./lib/Header.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Projects from "./lib/projects/Projects.svelte";

  const menuItems = ["Projects", "Contractors", "Analytics"];
  let selectedItem = menuItems[0];

</script>

<main>
  <div class="header-container">
    <div class="header">
      <div class="header-content">
        <Header />
      </div>
    </div>
    <div class="main-container">
      <div class="nav-bar">
        <Navbar {menuItems} {selectedItem} on:menu-change={(e) => selectedItem = e.detail.item}/>
      </div>

      <div class="content">
        <Projects />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    /* width: 80%; */
    margin: 0 auto;    
  }

  .header-container {
    /* width: 80%; */
    /* background-color: white; */
    /* padding: 0 2%; */
    /* border-bottom: 1px solid lightgray; */
  }

  .header {
    height: 60px;
    /* margin-top: 16px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 8px 8px -12px;
    /* border-bottom: 1px solid var(--line-color); */
  }

  .header-content {
    width: 90%;
  }

  .main-container {
    width: 90%;
    margin: 0 auto;
  }

  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid rgb(155, 161, 168);
    margin: 32px 0;
    position: relative;
  }
</style>
