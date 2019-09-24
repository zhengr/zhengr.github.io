---
published: true
layout: article
key: 20190909
typora-copy-images-to: ../../assets/images
---
## A New Post

```python
!pip install tushare --upgrade
!pip install lxml
!pip install bs4
```


```python
import h2o
from h2o.automl import H2OAutoML
h2o.init()

import tushare as ts
Import the prostate dataset

pro = ts.pro_api('43deec70782d42f7937d54a12169fd2bbb7bbc3f1d88078eef595d43')
df = pro.daily(ts_code='600519.SH')
prostate_df = h2o.H2OFrame(df)
df.describe()
prostate_df.describe()
```

```python
y="close"
```


```python
splits = prostate_df.split_frame(ratios = [0.8], seed = 1)
train = splits[0]
test = splits[1]
```

```python
aml = H2OAutoML(max_runtime_secs = 60, seed = 1, project_name = "lb_frame")
aml.train(y = y, training_frame = train, leaderboard_frame = test)
```

```python
aml2 = H2OAutoML(max_runtime_secs = 60, seed = 1, project_name = "lb_full_data")
aml2.train(y = y, training_frame = prostate_df)
```

    AutoML progress: |████████████████████████████████████████████████████████| 100%



```python

```
aml.leaderboard.head()

```python
aml2.leaderboard.head()
```


<table>
<thead>
<tr><th>model_id                                           </th><th style="text-align: right;">  mean_residual_deviance</th><th style="text-align: right;">    rmse</th><th style="text-align: right;">      mse</th><th style="text-align: right;">     mae</th><th style="text-align: right;">     rmsle</th></tr>
</thead>
<tbody>
<tr><td>GLM_grid_1_AutoML_20190902_185942_model_1          </td><td style="text-align: right;">               0.0278652</td><td style="text-align: right;">0.166929</td><td style="text-align: right;">0.0278652</td><td style="text-align: right;">0.106801</td><td style="text-align: right;">0.00713288</td></tr>
<tr><td>StackedEnsemble_AllModels_AutoML_20190902_185942   </td><td style="text-align: right;">               0.0394349</td><td style="text-align: right;">0.198582</td><td style="text-align: right;">0.0394349</td><td style="text-align: right;">0.134086</td><td style="text-align: right;">0.00850357</td></tr>
<tr><td>StackedEnsemble_BestOfFamily_AutoML_20190902_185942</td><td style="text-align: right;">               0.0426815</td><td style="text-align: right;">0.206595</td><td style="text-align: right;">0.0426815</td><td style="text-align: right;">0.140833</td><td style="text-align: right;">0.00884055</td></tr>
<tr><td>GBM_grid_1_AutoML_20190902_185942_model_8          </td><td style="text-align: right;">               0.0495339</td><td style="text-align: right;">0.222562</td><td style="text-align: right;">0.0495339</td><td style="text-align: right;">0.147271</td><td style="text-align: right;">0.00941473</td></tr>
<tr><td>GBM_2_AutoML_20190902_185942                       </td><td style="text-align: right;">               0.0519042</td><td style="text-align: right;">0.227825</td><td style="text-align: right;">0.0519042</td><td style="text-align: right;">0.156193</td><td style="text-align: right;">0.00925399</td></tr>
<tr><td>GBM_3_AutoML_20190902_185942                       </td><td style="text-align: right;">               0.0529904</td><td style="text-align: right;">0.230196</td><td style="text-align: right;">0.0529904</td><td style="text-align: right;">0.158492</td><td style="text-align: right;">0.00937731</td></tr>
<tr><td>GBM_4_AutoML_20190902_185942                       </td><td style="text-align: right;">               0.0602904</td><td style="text-align: right;">0.245541</td><td style="text-align: right;">0.0602904</td><td style="text-align: right;">0.160588</td><td style="text-align: right;">0.0103019 </td></tr>
<tr><td>GBM_grid_1_AutoML_20190902_185942_model_2          </td><td style="text-align: right;">               0.0616606</td><td style="text-align: right;">0.248316</td><td style="text-align: right;">0.0616606</td><td style="text-align: right;">0.170937</td><td style="text-align: right;">0.0104892 </td></tr>
<tr><td>GBM_1_AutoML_20190902_185942                       </td><td style="text-align: right;">               0.063141 </td><td style="text-align: right;">0.251279</td><td style="text-align: right;">0.063141 </td><td style="text-align: right;">0.157207</td><td style="text-align: right;">0.0109298 </td></tr>
<tr><td>GBM_grid_1_AutoML_20190902_185942_model_6          </td><td style="text-align: right;">               0.0645039</td><td style="text-align: right;">0.253976</td><td style="text-align: right;">0.0645039</td><td style="text-align: right;">0.164347</td><td style="text-align: right;">0.0101215 </td></tr>
</tbody>
</table>


```python
pred = aml.predict(test)
pred.head()
perf = aml.leader.model_performance(test)
perf
```


    ModelMetricsRegression: gbm
    ** Reported on test data. **
    
    MSE: 1.4739741984261734
    RMSE: 1.2140733908731274
    MAE: 0.6762945751646032
    RMSLE: 0.005059084721700143
    Mean Residual Deviance: 1.4739741984261734

```python

```
