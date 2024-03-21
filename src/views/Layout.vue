<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="projects" @click="$router.push({ name: 'projects' })">
          <ion-icon aria-hidden="true" :icon="list" />
          <ion-label>Projects</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chats" @click="$router.push({ name: 'chats' })">
          <ion-icon aria-hidden="true" :icon="chatbubbles" />
          <ion-label>Chats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" @click="$router.push({ name: 'settings' })">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { chatbubbles, settings, list } from 'ionicons/icons';
</script>
