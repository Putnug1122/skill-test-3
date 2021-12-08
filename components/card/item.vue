<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            v-model="checked"
          />
        </div>
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        :value="name"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    position: {
      type: String,
      default: 'left',
    },
  },
  computed: {},
}
</script>

<style></style>
