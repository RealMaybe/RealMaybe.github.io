<template>
    <IndexHeader />

    <WebSkill />
    <LanguageStudy />
    <PersonalHobbies />
</template>

<script setup lang="ts">
import IndexHeader from "@/features/index/IndexHeader.vue";

import WebSkill from "@/components/shared/WebSkill.vue";
import LanguageStudy from "@/components/shared/LanguageStudy.vue";
import PersonalHobbies from "@/components/shared/PersonalHobbies.vue";
</script>
