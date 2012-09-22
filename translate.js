document.addEventListener('keydown', function(e){
	if (e.keyCode == 91){
		var selection = window.getSelection();
		if (selection.toString() != undefined && selection.toString() != ''){
			console.log(selection);	
			$.get('http://translate.google.cn/translate_a/t',
				{
					client:'t',
					text:selection.toString(),
					hl:'en',
					sl:'en',
					tl:'zh-CN',
					ie:'UTF-8',
					oe:'UTF-8',
					multires:1,
					otf:1,
					pc:1,
					ssel:5,
					tsel:5
				},
				function(data){
					console.log(data);
					a = eval(data);
					console.log(a);
					var str = '';
					a[0].forEach(function(el, index){
						str += el[0];
					});
					var old = selection.baseNode.parentElement.innerHTML;
					var el = document.createElement('span');
					el.innerHTML = '<br ><br >' + str;
					el.style.color = 'red';

					selection.baseNode.parentElement.appendChild(el);
				});
		}
	}	
});