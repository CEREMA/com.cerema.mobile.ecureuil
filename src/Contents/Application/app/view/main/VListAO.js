App.view.define('main.VListAO', {

	extend: 'Ext.Container',
	alias: "widget.TListAO",
	
	config: {
		title: "Appel d'offres",
		layout: "fit",	
		items: [
			{
				xtype: "list",
				store: App.store.create('App.AO.getAll',{
					autoLoad: true
				}),
				itemTpl: '<div class="contact">{Objet}</div>',
				onItemDisclosure: function(record, btn, index) {
					/*ListDemo.detailPanel.update(record.data);
					ListDemo.Viewport.setActiveItem('detailpanel');*/
				}				
			}
		]
	}
});