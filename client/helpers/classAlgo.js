import _ from 'lodash';
import { browserHistory } from 'react-router';
import { dispatch } from '../index.js';
import * as actions from '../actions/addClassListAction.js';

function classAlgo(e) {
		if(e === '') {
			return 'Empty textbox';
		}
		let splitByLineBreak = e.replace(/(?:\r\n|\r|\n)/g, ',')
		let nestedArray = splitByLineBreak.split(',');
		let noWhiteSpace = [];
		nestedArray.forEach(function(arr) {
	    if(arr !== '') {
		  	noWhiteSpace.push(arr.trim().split(': '));
	    }
		})

		noWhiteSpace.forEach(function(word) {
			if(word.length < 2) {
				word[0] = word[0].replace(/[:]/g, '');
			}
		})
		
		var Tree = function(value) {
		  var newTree = {};
		  newTree.value = value;
		  newTree.children = [] ;
			_.extend(newTree,treeMethods);
		  return newTree;
		};

		var treeMethods = {};

		treeMethods.addChild = function(value) {
		  this.children.push(Tree(value));
		};

		treeMethods.contains = function(target, other) {
		  var result = false;
		  function checkTarget(node) {
		    if (node.value[0] === target || node.value === target) {
		      result = true;
		    }
		  var child = node.children
		    if(child !== undefined){
		      for (let i = 0; i < child.length; i++){
		        checkTarget(child[i]);
		      }
		    }
		  }
		  checkTarget(this);
		  return result;
		};

		treeMethods.traverse = function(target, targetChild) {
		  function checkTarget(node) {
		    if (node.value[0] === target || node.value === target) {
		      node.children.push(Tree(targetChild))
		    }
		  var child = node.children
		    if(child !== undefined){
		      for (let i = 0; i < child.length; i++){
		        checkTarget(child[i]);
		      }
		    }
		  }
		  checkTarget(this);
		}

		var tree = new Tree('Classes');
		
		for(let i = 0; i < noWhiteSpace.length; i++) {
			if(noWhiteSpace[i].length < 2) {
				tree.addChild(noWhiteSpace[i])
				noWhiteSpace.splice(i, 1)
				i--;
			}
		}

		function addToTree(array, num) {
			let counter = num
			let noActivity = true;
			while(array.length >= 1) {
				if(counter <= 1 && array.length == 1) {
					if(!tree.children.length) {
						tree.addChild(array[counter][1])
					} else {
							tree.traverse(array[0][1], array[0][0])
							array.splice(0, 1)
					}
				} else if(counter === array.length -1) {
						addToTree(array, 0) 
				} else if(tree.contains(array[counter][1])) {
						tree.traverse(array[counter][1], array[counter][0])
						array.splice(counter, 1)
						counter++
				} else if(!tree.children.length) {
						tree.addChild(array[counter][1])
				} else {
						counter++
				}
			}	
		}

		addToTree(noWhiteSpace, 0)

		function buildOutput(tree) {
			const output = [];
			function checkTarget(node) {
				if(node.length > 1) {
					for(let i = 0; i < node.length; i++) {
						if(node[i].children.length) {
							output.push(node[i].value[0])
							checkTarget(node[i])
						} else {
							output.push(node[i].value)
						}
					}
				} else if(Array.isArray(node)) {
						if(node[0].children.length) {
							output.push(node[0].value)
							checkTarget(node[0].children)
						} else if(!node[0].children.length) {
								output.push(node[0].value)
						}
				} else if(node.children.length){
						checkTarget(node.children)
				} else if(!node.children.length){
						output.push(node.value)
				}
	    }
		  checkTarget(tree.children);
		  testOutput(output)
	  }
		buildOutput(tree)

		var finalResult;

		function testOutput(output) {
			const obj = {};
			let flag = true;
			for(let i = 0; i < output.length; i++) {
				if(!obj[output[i]]) {
					obj[output[i]] = 1
				} else {
						flag = false
				}
			}
			if(flag) {
				browserHistory.push('/showclasses')
				finalResult = output.join(', ')
				dispatch(actions.addClassList('Good input: ' + finalResult));
			} else {
					browserHistory.push('/showclasses')
					finalResult = output.join(', ')
					dispatch(actions.addClassList('Bad input: ' + finalResult));
			}
		}
		return finalResult
	}
	module.exports = classAlgo