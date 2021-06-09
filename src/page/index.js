const html = (name, status, any) => {
  return `<div>
  <header style='background-color: blue'>
    <h2>Report</h2>
  </header>
  <div style='border: 1px solid gray'>
    <h1>${name}</h1>
    <h1>${status}</h1>
    <h1>${any}</h1>
  </div>
  
</div>`
  
}

module.exports = html;