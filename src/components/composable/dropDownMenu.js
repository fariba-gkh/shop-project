import { ref } from "vue";


export default  function closeListMenu() {
    const close = ref(false);
    function openList(e){
        close.value = !close.value;
    };
    

    function closed (e) {
        if (!this.$el.contains(e.target)) {
          this.close.value = false
        }
      };
    
    function mounted () {
      document.addEventListener('click', this.close)
    };
   
    function beforeDestroy () {
      document.removeEventListener('click',this.close)
    };
   
    return {
        openList,
        close,
        closed,
        mounted,
        beforeDestroy,
      };
}



   
