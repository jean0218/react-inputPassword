import React, { Component } from 'react';

export default function DemoApi01(){
    const htmlDom = `<div id="result_show">
                    <div class="highlight">
                        <pre>
                        <span></span>
                        <span class="kr">import</span> 
                        <span class="nx">React</span>
                        <span class="p">,</span> 
                        <span class="p">{</span> <span class="nx">Component</span> <span class="p">}</span> <span class="nx">from</span> <span class="s1">'react'</span><span class="p">;</span>
                        <span class="kr">import</span> <span class="p">{</span> <span class="nx">InputPassword</span> <span class="p">}</span> <span class="nx">from</span> <span class="s1">'../../src/index'</span><span class="p">;</span>
                        <span class="kr">import</span> <span class="s1">'./demoExample01.css'</span><span class="p">;</span>

                        <span class="kr">export</span> <span class="k">default</span> <span class="kr">class</span> <span class="nx">DemoExample01</span> <span class="kr">extends</span> <span class="nx">Component</span><span class="p">{</span> 
                            <span class="nx">constructor</span><span class="p">(</span><span class="nx">props</span><span class="p">){</span>
                                <span class="kr">super</span><span class="p">(</span><span class="nx">props</span><span class="p">);</span>
                                <span class="k">this</span><span class="p">.</span><span class="nx">handleChange</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">handleChange</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="k">this</span><span class="p">);</span>
                                <span class="k">this</span><span class="p">.</span><span class="nx">state</span> <span class="o">=</span> <span class="p">{</span>
                                    <span class="nx">password</span><span class="o">:</span> <span class="s1">''</span>
                                <span class="p">};</span>
                            <span class="p">}</span>   

                            <span class="nx">handleChange</span><span class="p">(</span><span class="nx">newState</span><span class="p">){</span>
                                <span class="k">this</span><span class="p">.</span><span class="nx">setState</span><span class="p">({</span><span class="nx">password</span><span class="o">:</span> <span class="nx">newState</span><span class="p">});</span>
                            <span class="p">}</span>

                            <span class="nx">render</span><span class="p">(){</span>
                                <span class="k">return</span> <span class="p">(</span>
                                    <span class="o">&lt;</span><span class="nx">div</span> <span class="nx">className</span> <span class="o">=</span> <span class="s2">"demo01-content"</span><span class="o">&gt;</span>
                                        <span class="o">&lt;</span><span class="nx">h4</span> <span class="nx">className</span> <span class="o">=</span> <span class="s2">"demo-title"</span><span class="o">&gt;</span><span class="nx">输入支付码</span><span class="o">&lt;</span><span class="err">/h4&gt;</span>
                                        <span class="o">&lt;</span><span class="nx">InputPassword</span>
                                            <span class="nx">onChange</span> <span class="o">=</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">handleChange</span><span class="p">}</span>
                                        <span class="o">/&gt;</span>
                                        <span class="o">&lt;</span><span class="nx">p</span> <span class="nx">className</span> <span class="o">=</span> <span class="s2">"demo-msg"</span><span class="o">&gt;</span><span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">state</span><span class="p">.</span><span class="nx">password</span><span class="p">}</span><span class="o">&lt;</span><span class="err">/p&gt;</span>
                                    <span class="o">&lt;</span><span class="err">/div&gt;</span>
                                <span class="p">)</span>        
                            <span class="p">}</span>
                        <span class="p">};</span>
                        </pre></div>
                        </div>`
    return (
        <div>
            <section>
                <h2>inputPassword</h2>
                <p>移动端输入密码组件</p>
            </section>
            <section>
                <h2>何时使用</h2>
                <p>输入数值型支付密码,只能输入数字</p>
            </section>
            <section>
                <h2>代码演示</h2>
                <code dangerouslySetInnerHTML ={{__html:htmlDom}}>
                    
                </code>
            </section>
            <section>
                <h2>API</h2>
                <h4>List</h4>
                <table className = "demo-api">
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>defaultValue</td>
                            <td>密码</td>
                            <td>string</td>
                            <td>''</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>输入完成后，获取密码</td>
                            <td>function</td>
                            <td>-</td>
                        </tr>                            
                    </tbody>
                </table>
            </section>
        </div>
    )
}