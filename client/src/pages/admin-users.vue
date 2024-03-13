<script setup lang="ts">
    import { getUserStore } from '../global/users';
    const {users} = getUserStore();
</script>

<template>
    <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">My Activity</a></li>
                <li><a href="#">Admin</a></li>
                <li class="is-active"><a href="#" aria-current="page">Users</a></li>
            </ul>
        </nav>
        
        <div class="buttons">
            <button class="button is-primary"> 
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span class="text-space">Add User</span>
            </button>
        </div>

        <table class="table is-fullwidth is-bordered">
        <thead>
            <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th> 
            <th>Username</th> 
            <th>Is Admin</th>
            <th class="actions-column"</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td> 
                    <figure class="image is-48x48">
                        <img :src="user.profilePicURL || 'default-profile.png'" alt="Profile picture">
                    </figure>
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.emails.join(', ') }}</td> 
                <td>{{ user.username }}</td>
                <td>{{ user.isAdmin ? 'Yes' : 'No' }}</td>
                <td class="actions-column">
                    <button class="button is-medium mr-2" style="margin-left: 7px;">
                    <span class="icon">
                        <i class="fas fa-edit"></i>
                    </span>
                    </button>
                    <button class="button is-medium mr-2">
                    <span class="icon">
                        <i class="fas fa-trash"></i>
                    </span>
                    </button>
                </td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<style scoped>

.image.is-48x48 img {
    height: 48px; 
    width: 48px;
    object-fit: cover; 
    border-radius: 5%; 
    border: 2px solid #dbdbdb; /* Adds a light gray border */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Adds a subtle shadow */ 
}

.table td .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.table tr:hover {
  background-color: rgba(0, 209, 178, 0.3); 
}

.actions-column {
  width: 150px; 
}

text-space {
  margin-left: 3px;
}

</style> 
