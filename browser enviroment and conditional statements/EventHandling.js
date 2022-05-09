var menuLinks = document.querySelectorAll('.menu a')

function displayInfoPanelForElement(Event) {
    let anchor = Event.target
    let infoPanel = anchor.parentNode.querySelector('menu-item-info')

    // make ethe pael visible
    // note: classList is available only on IE10+
    infoPanel.classList.add('is-visible')
}

function hideInfoPanel (Event) {
    let anchor = Event.target
    let infoPanel = anchor.parentNode.querySelector('menu-item-info')

    // make ethe pael visible
    // note: classList is available only on IE10+
    infoPanel.classList.remove('is-visible')
}   

// iterate on the list and register a callback when the user hover on the link 

for (let i = 0; i < menuLinks.length; i++) {
    // we are o neaxh anchor element i nthe menu 
    // register a callback when the mouse hover the link
    var anchor = menuLinks[i]
    
    anchor.addEventListener('onmouseover', displayInfoPanelForElement)
    anchor.addEventListener('onmouseout', hideInfoPanelForElement)
}

