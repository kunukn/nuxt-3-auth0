interface ObjectUnknownProperties {
  [key: string]: any
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth0: ObjectUnknownProperties
  }

  interface VueConstructor {
    $auth0: ObjectUnknownProperties
  }
}
