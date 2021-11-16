const ProfileEdit = () => {

    return (
        <section class="section">
            <h3 class="title is-4">Pfofile edit</h3>
            <div class="box">
                <h4 id="const" class="title is-3">const</h4>
                <article class="message is-primary">
                    <div class="message-body">
                        Block-scoped. Cannot be re-assigned. Not immutable.
                    </div>
                </article>
                <pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token string">'test'</span><span class="token punctuation">;</span></code></pre>
            </div>

        </section>

    )
}

export default ProfileEdit