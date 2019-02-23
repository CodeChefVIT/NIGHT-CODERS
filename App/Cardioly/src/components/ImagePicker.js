import ImagePicker from 'react-native-image-picker';
import React,{Component} from 'React';
import {Image,View,Text,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Spinner} from './reusables/Spinner';



const createFormData = (photo) => {
        const data = new FormData();
        
        data.append("image", {
          name: photo.fileName,
          uri: photo.uri,
          type:photo.type
        });
        //console.log(data);
        return data;
    };

export default class ImageComponent extends Component
{

      constructor()
      {
            super();
            this.state={
              photo:null,
            }
      }

      componentWillMount()
       {
        this.setState({
          photo:this.props.photo,
          isLoading:false
      }) 
      }

     

      renderSpinnerOrUpload()
      {
        if(this.state.isLoading)
            {
              return(
                <View style={{marginTop:20}}>
                <Spinner />
                <Text style={[styles.textStyle,{marginTop:20}]}>Upload in Progress</Text>
                </View>
              )

            }

        else
            {
              return(
                <TouchableOpacity style={styles.buttonStyle} onPress={this.handleUploadPhoto.bind(this)} >
                <Text style={[styles.textStyle]}>
                  Upload Photo
                </Text >
                </TouchableOpacity>
              )

            }

      }

        handleUploadPhoto = () =>
        {
          this.setState(
            {
              isLoading:true
            }
          )

              fetch("https://visionapu.herokuapp.com/imgupload", {
                method: "POST",
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Accept':'*/*'
                },
                body: createFormData(this.state.photo)
              })
                .then(response => response.json())
                .then(response => {
                  this.setState(
                    {
                      isLoading:false
                    }
                  )
                  //console.log(response);
                //alert("Upload success!");
                  Actions.confirmfoodscreen({foodItems:response.responses[0].labelAnnotations,imagePath:this.state.photo.uri,mealType:this.props.mealType});
                  this.setState({ photo: null});

                 
                })
                .catch(error => {
                  console.log("upload error", error);
                  alert("Upload failed!");
                  this.setState(
                    {
                      isLoading:false
                    }
                  )
                });
            };







        render()
        {

          return(
            <View style={{flex:1,justifyContent:'center'}}>
            <View style={{}}>
            <View style={styles.imageBox}>
              <Image source={this.state.photo} style={{borderWidth:3,height:350,width:350}} />
              </View>
              <View style={styles.firstButtonBox}>
              {this.renderSpinnerOrUpload()}
              </View> 
              </View>
              </View>
          )
        }
  }


const styles = {
      textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
  },
        buttonStyle: {
          alignSelf: 'stretch',
          backgroundColor: '#fff',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#007aff',
          marginLeft: 5,
          marginRight: 5,
          marginBottom:10,
          marginTop:10,
          padding:10
  },
        imageBox:{
          //flex:2,
          flexDirection:'row',
          justifyContent:'center'   

  },
  firstButtonBox:{
          //flex:1,
          flexDirection:'row',
          justifyContent:'center'   

  },
  secondButtonBox:{
          //flex:1,
          flexDirection:'row',
          justifyContent:'center'   



  }

};