<template>
  <div class="wrapper">
    <ul class="content">
      <li>分类：1</li>
      <li>分类：2</li>
      <li>分类：3</li>
      <li>分类：4</li>
      <li>分类：5</li>
      <li>分类：6</li>
      <li>分类：7</li>
      <li>分类：8</li>
      <li>分类：9</li>
      <li>分类：10</li>
      <li>分类：11</li>
      <li>分类：12</li>
      <li>分类：13</li>
      <li>分类：14</li>
      <li>分类：15</li>
      <li>分类：16</li>
      <li>分类：17</li>
      <li>分类：18</li>
      <li>分类：19</li>
      <li>分类：20</li>
      <li>分类：21</li>
      <li>分类：22</li>
      <li>分类：23</li>
      <li>分类：24</li>
      <li>分类：25</li>
      <li>分类：26</li>
      <li>分类：27</li>
      <li>分类：28</li>
      <li>分类：29</li>
      <li>分类：30</li>
      <li>分类：31</li>
      <li>分类：32</li>
      <li>分类：33</li>
      <li>分类：34</li>
      <li>分类：35</li>
      <li>分类：36</li>
      <li>分类：37</li>
      <li>分类：38</li>
      <li>分类：39</li>
      <li>分类：40</li>
      <li>分类：41</li>
      <li>分类：42</li>
      <li>分类：43</li>
      <li>分类：44</li>
      <li>分类：45</li>
      <li>分类：46</li>
      <li>分类：47</li>
      <li>分类：48</li>
      <li>分类：49</li>
      <li>分类：50</li>
      <li>分类：51</li>
      <li>分类：52</li>
      <li>分类：53</li>
      <li>分类：54</li>
      <li>分类：55</li>
      <li>分类：56</li>
      <li>分类：57</li>
      <li>分类：58</li>
      <li>分类：59</li>
      <li>分类：60</li>
      <li>分类：61</li>
      <li>分类：62</li>
      <li>分类：63</li>
      <li>分类：64</li>
      <li>分类：65</li>
      <li>分类：66</li>
      <li>分类：67</li>
      <li>分类：68</li>
      <li>分类：69</li>
      <li>分类：70</li>
      <li>分类：71</li>
      <li>分类：72</li>
      <li>分类：73</li>
      <li>分类：74</li>
      <li>分类：75</li>
      <li>分类：76</li>
      <li>分类：77</li>
      <li>分类：78</li>
      <li>分类：79</li>
      <li>分类：80</li>
      <li>分类：81</li>
      <li>分类：82</li>
      <li>分类：83</li>
      <li>分类：84</li>
      <li>分类：85</li>
      <li>分类：86</li>
      <li>分类：87</li>
      <li>分类：88</li>
      <li>分类：89</li>
      <li>分类：90</li>
      <li>分类：91</li>
      <li>分类：92</li>
      <li>分类：93</li>
      <li>分类：94</li>
      <li>分类：95</li>
      <li>分类：96</li>
      <li>分类：97</li>
      <li>分类：98</li>
      <li>分类：99</li>
      <li>分类：100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
     this.scroll = new BScroll('.wrapper', {
        probeType: 1,
        pullUpLoad: true
      });
      this.scroll.on('scroll', (position) => {
        // console.log(position)
      });
      this.scroll.on('pullingUp', () => {
        console.log(111)
      })
    },
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: rgb(159, 191, 250);
    overflow: hidden;
  }
</style>
