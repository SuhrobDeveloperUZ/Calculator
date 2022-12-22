document.querySelectorAll('.radio').forEach(btn => btn.addEventListener('change', (e)=>{
    document.body.className = e.target.value
}));