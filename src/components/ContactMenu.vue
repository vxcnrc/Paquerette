<template>
	<v-menu offset-y>
		<template v-slot:activator="{ props }">
			<v-btn v-bind="props" class="nav-link" variant="text">Autre</v-btn>
		</template>
		<v-list class="dropdown-menu">
			<v-list-item to="/autre" class="dropdown-item">
				<v-list-item-title>Contact</v-list-item-title>
			</v-list-item>
			<v-list-item to="/acces" class="dropdown-item">
				<v-list-item-title>Accès</v-list-item-title>
			</v-list-item>
			<v-list-item to="/agenda" class="dropdown-item">
				<v-list-item-title>Agenda</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

  
  <script>
  export default {
    name: "ContactMenu"
  };
  </script>
  
  <style scoped>
/* Style du bouton "Autre" pour ressembler aux autres liens du header */
.nav-link {
	color: #ecf0f1;
	text-decoration: none;
	padding: 5px 15px;
	transition: color 0.3s ease, background-color 0.3s ease;
	text-transform: uppercase;
	font-size: 18px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	min-height: 0; /* Pour ajuster la hauteur par défaut de v-btn */
}

/* Hover comme les autres liens */
.nav-link:hover {
	color: #fff;
	background-color: #f39c12;
	border-radius: 4px;
}

/* Style du menu déroulant */
.dropdown-menu {
	background: #2a2a2a !important;
	border-radius: 4px;
	min-width: 180px;
	padding: 5px 0;
}

/* Style des éléments du menu */
.dropdown-item {
	color: #ecf0f1 !important;
	font-size: 18px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
	padding: 10px 15px;
	text-transform: uppercase;
	transition: background 0.3s ease;
}

.dropdown-item:hover {
	background: #f39c12 !important;
	color: #fff !important;
}
</style>
