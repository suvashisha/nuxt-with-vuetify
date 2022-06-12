<template>
  <div>
<!-- Hover Sidebar -->
<div class="hover-sidebar">
  <ul>
    <li><a href="#"><i class="fa fa-home"></i> <span class="hide-menu">Home</span></a></li>
    <li><a href="#"><i class="fa fa-globe"></i> <span class="hide-menu">Globe</span></a></li>
    <li><a href="#"><i class="fa fa-user"></i> <span class="hide-menu">User</span></a></li>
    <li><a href="#"><i class="fa fa-envelope"></i> <span class="hide-menu">Envelope</span></a></li>
    <li><a href="#"><i class="fa fa-cogs"></i> <span class="hide-menu">Cogs</span></a></li>
  </ul>
</div>  <!-- End of Hover Sidebar -->
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
/* Hover Sidebar */
.hover-sidebar{
  position: fixed;
	left: -16px;
	top: 0;
	bottom: 0;
	border-right: 200px solid rgba(0,0,0,0.2);
	box-shadow: 4px 0 5px rgba(0,0,0,0.2);
	z-index: 1;
	cursor: pointer;
  animation: change_color 10s 10;
}
.hover-sidebar .hide-menu{
  display: none;
}
.hover-sidebar:hover .hide-menu{
  display: inline-block;

}

</style>
