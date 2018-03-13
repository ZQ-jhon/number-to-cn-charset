	function toCharset(num) {
				//将数字转换为字符串，并且只要第一位。
				

				switch(num) {
					case '1':
						return '壹';
						break;
					case '2':
						return '贰';
						break;
					case '3':
						return '叁';
						break;
					case '4':
						return '肆';
						break;
					case '5':
						return '伍';
						break;
					case '6':
						return '陆';
						break;
					case '7':
						return '柒';
						break;
					case '8':
						return '捌';
						break;
					case '9':
						return '玖';
						break;
					case '0':
						return '零';
						break;

						/*****
						 *  case '10':return '拾';
						    	break;
						    case '100':return '佰';
						    	break;
						    case '1000':return '仟';
						    	break;
						    case '10000':return '萬';
						    	break;
						 */

				}
			}

			function toNum(num) {

				if(typeof num == 'number') {
						
					//输入检测，如果为数字，则继续执行。
					if(num >= 10000 && num <= 99999) {
						console.log('这是一个万位数');
						num+='';

						var tenThoutand =  toCharset(num.substring(0,1)) + '萬' + toCharset(num.substring(1,2))+ '仟' + toCharset(num.substring(2,3)) + '佰' + toCharset(num.substring(3,4)) + '拾' + toCharset(num.substring(4,5));
						return tenThoutand;
					}

					else if(num >= 1000 && num < 10000) {
						console.log('这是一个千位数');
						num+='';
						var thoutand =   toCharset(num.substring(0,1))+ '仟' +  toCharset(num.substring(1,2)) + '佰' +  toCharset(num.substring(2,3)) + '拾' + toCharset(num.substring(3,4));
						
						//‘零’去重
						thoutand = toCharset(num.substring(1,2))=='零'?thoutand.substring(0,3)+thoutand.substring(4,thoutand.length):thoutand

	
						return thoutand;
					}

					else if(num >= 100 && num < 1000) {
						console.log('这是一个百位数');
						num+='';
						var hundred =   toCharset(num.substring(0,1)) + '佰' + toCharset(num.substring(1,2)) + '拾' +  toCharset(num.substring(2,3));
						if(toCharset(num.substring(1,2))=='零'){
							
								if(toCharset(num.substring(2,3))=='零'){
								//十位，个位都为0    00
								hundred = toCharset(num.substring(0,1)) + '佰';
								
								}
								
						
							
								else {
								//十位为0，但个位不为0  01
									
								hundred = toCharset(num.substring(0,1))+'佰'+'零'+toCharset(num.substring(2,3))
									
								}
							
							
							
						}
						
						else if(toCharset(num.substring(2,3))=='零'){
							hundred = toCharset(num.substring(0,1))+'佰'+toCharset(num.substring(1,2)) + '拾';
							
						}
						
					
						
						
							
							
					
						
						
						
						return hundred;
					}
					else if(num >= 10 && num < 100) {

						console.log('这是一个十位数')
						num+='';
						var ten =   toCharset(num.substring(0,1))+ '拾' +  toCharset(num.substring(1,2));
						if(toCharset(num.substring(1,2))=='零'){
							
							ten = ten.substring(0,2);
						}
						return ten;				
					}

					else if(num >= 1 && num < 10) {
						console.log('这是一个个位数')
						num+='';
						var simple =  toCharset(num.substring(0,1));
						
						return simple;
					}

					else if(num > 99999) {

						console.log('输入超出');
					}

				} else {
					//输入若非数字，直接return error
					return '输入的不是数字!';
				}

			}