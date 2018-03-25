/**
 * Created by Administrator on 2017/11/8.
 */
var V = new Vue({
    el: 'body',
    data: {
        input_name: '',
        input_url: '',
        err_status: false,
        input_err2: '添加名称确保长度在5-30个字以内,请检查',
        input_err: '这网址不是youtube的，或者不是网址！请检查!'
    },
    methods: {  //自定义方法集合
        sub: function(){    //搜索点击事件

            // this.input_url = window.location.href;
            if(this.input_name === ''){
                this.input_err = this.input_err2
                this.err_status = true
                return false;
            }

            var _str=this.input_name;
            //console.log('==========',_str.length);
            if(parseInt(_str.length) < 3 || parseInt(_str.length) > 30){
                this.input_err = this.input_err2
                this.err_status = true
                return false;
            }else{
                this.input_err = ''
            }


            var reg=/^https:\/\/www\.youtube\.com/is;
            if(!reg.test(this.input_url)){
                this.input_err = '这网址不是youtube的，或者不是网址！请检查!'
                this.err_status = true
                return false;
            }else{
                this.input_err = ''
            }



            var _vue = this

            $.post("http://xcc.3ddysj.com/index.php", { "name": this.input_name,"url": this.input_url },
                function(data){
                    if(data.msg === '添加完成'){
                        _vue.input_name = ''
                        alert(data.msg)
                    }else{
                        _vue.input_err = '添加失败联系技术排查异常'
                        _vue.err_status = true
                        return false;
                    }
                   // console.log('======',data); //  2pm
                }, "json");

            // console.log('-----',this.input_url,this.input_name); return false;
            //
            // var _href = '';
            // _href = "http://jx.vgoodapi.com/jx.php?url=&url="+this.input_url
            // window.open(_href);
        }
    },
})