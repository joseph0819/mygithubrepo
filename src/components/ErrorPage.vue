<template>
    <section className="error-container">
            <section className='errorpage'><span className="first-span">404</span> <span>error</span></section>

            <section className='epage'>Sorry!!!This page doesn't exist 😢😢😢</section>

           
    </section>
</template>
<script >

export default{

}

</script>
<style scoped>
.error-container{
    height: 70vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-family: cursive;
}
.errorpage{
    font-size: 80px;
}
.epage{
    margin-bottom: 70px;
    font-size: 20px;
}
</style>