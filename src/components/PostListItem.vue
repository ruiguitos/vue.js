<template>
  <div v-if="post && user" class="post">
    <div class="user-info">
      <a class="user-name" href="#">{{ user.name }}</a>

      <a href="#">
        <img :src="user.avatar" alt="" class="avatar-large">
      </a>

      <p class="desktop-only text-small">{{ userThreadsCount }} threads</p>
      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
    </div>

    <div class="post-content">
      <template v-if="!editing">
        <div>
          {{ post.text }}
        </div>
        <a class="link-unstyled" href="#" style="margin-left: auto;" title="Make a change"
           @click.prevent="editing = true"><i class="fa fa-pencil"></i></a>
      </template>
      <div v-else>
        <PostEditor
          :post="post"
          @cancel="editing = false"
          @save="editing = false"
        />
      </div>

    </div>

    <div class="post-date text-faded">
      <div v-if="post.edited" class="edition-info">edited</div>
      <AppDate :timestamp="post.publishedAt"/>
    </div>
  </div>
</template>

<script>
import PostEditor from './PostEditor'

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  components: {
    PostEditor
  },
  data () {
    return {
      editing: false
    }
  },

  computed: {
    user () {
      return this.$store.state.users[this.post.userId]
    },
    userPostsCount () {
      return this.$store.getters.userPostsCount(this.post.userId)
    },

    userThreadsCount () {
      return this.$store.getters.userThreadsCount(this.post.userId)
    }
  }
}
</script>

<style scoped>

</style>
