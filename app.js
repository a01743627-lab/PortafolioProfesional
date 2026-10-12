// filtros + toggles + menú móvil
const filters = document.querySelectorAll('#filters button');
const cards = document.querySelectorAll('.projects-grid .card');
filters.forEach(b=>b.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const f=b.dataset.filter;
  cards.forEach(c=>{
    const show = f==='all' || c.dataset.cat.includes(f);
    c.style.display = show?'flex':'none';
  });
}));
document.querySelectorAll('.toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const extra = btn.closest('.card').querySelector('.extra');
  if(!extra) return;
  extra.classList.toggle('show');
  btn.textContent = extra.classList.contains('show') ? 'Ver menos –' : 'Ver ficha +';
}));
const menuBtn=document.getElementById('menuBtn');
const mobile=document.getElementById('mobileMenu');
menuBtn.addEventListener('click',()=>mobile.classList.toggle('open'));
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
