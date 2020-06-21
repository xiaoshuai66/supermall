<template>
  <scroll class="content" ref="scroll">
    <div class="cart-list" v-if="cartList.length !== 0">
      <cart-list-item v-for="(item, index) in cartList" 
      :item-info="item"
      :key="index"></cart-list-item>
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
    </ul>
  </scroll>
</template>

<script>
  import CartListItem from './CartListItem.vue'

  import Scroll from 'components/common/scroll/Scroll.vue'

  export default {
    name: 'CartList',
    components: {
      CartListItem,
      Scroll
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    activated() {
     this.$refs.scroll.refresh()
   }
  }
</script>

<style scoped>
.cart-list {
  width: 100%;
}
</style>